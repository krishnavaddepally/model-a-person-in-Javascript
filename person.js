// your code, here


let aboutMe={
  firstName : 'krishna keerthi',
  lastName  : 'Gentyala',
  homeTown  : 'India',
  occupation: 'UI developer @ TCS',
  catchPhrase : 'Just do it',
  name() {
    return  this.firstName + " "+ this.lastName
  }
}
console.log(aboutMe)
console.log(aboutMe.name())
