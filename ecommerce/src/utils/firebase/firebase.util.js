import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import {
    getFirestore,
    doc, // 다큐먼트 설정
    getDoc, //  Doc이 아니라 Data를 가져옴
    setDoc // Doc 이 아니라 Data를 설정함
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDI2bHE_ygCSjDv0oEm_EBK7C057JHIdsw",
    authDomain: "ecommerce-ce8ad.firebaseapp.com",
    projectId: "ecommerce-ce8ad",
    storageBucket: "ecommerce-ce8ad.firebasestorage.app",
    messagingSenderId: "212744200367",
    appId: "1:212744200367:web:13a4fd22eb4804933f345a"
};

// Initialize Firebase sdk킷을 인식함
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

// Google에서 요구함
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// 싱글톤 인스턴스
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    // userdata가 있는지 확인한다.
    const userSnapshot = await getDoc(userDocRef);

    // 만약 userdata가 없다면, 우리가 가진 컬렉션의 특정 주소로 userdata를 만든다.
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    // userDocRef를 리턴한다.
    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

