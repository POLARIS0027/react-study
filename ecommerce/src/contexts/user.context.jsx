import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.util";

// 실제 값으로 접근하기를 원하는 것
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

// 프로바이더 : 내부 값에 엑세스가 필요한 모든 다른 구성 요소를 감싸는 구성 요소
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            // mount될때는 콜백만 작동함.
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        // unmount될때만 작동하는 cleanup 함수
        return unsubscribe;
    }, []);


    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}