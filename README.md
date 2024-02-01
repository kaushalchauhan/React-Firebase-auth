# learning firebase-auth with React JS

## Firebase Setup

- import getAuth from firebase/auth
- import initializeApp from firebase/app
- firebase config from .env file
- `const app = initializeApp(firebaseConfig)` - passing firebaseConfigs to the app
- `export const firebaseAuth = getAuth(app)`

### Signup

- create user -> `const handleSignUp = async() =>{
  try {
    await createUserWithEmailAndPassword(firebaseAuth,email,password)
  } catch (error) {
    setErrMsg(error?.message)
  }
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate('/')
  })
}`

### SignOut

`<button onclick={()=>signOut(firebaseAuth)} >Sign Out</button>` // signOut is importing form 'firebase/auth'

### Login

- `const handlelogin = async() =>{
  try {
    await signInWithEmailAndPassword(firebaseAuth,email,password)
  } catch (error) {
   setErrMsg(error?.message)
  }
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate('/')
  })
}`

### get User email

`onAuthStateChanged(firebasAuth,(currentUser)=>{
    if(currentUser) setUser(currentUser)
})`
