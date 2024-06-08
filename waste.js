const email = "fawadansari31@gmail.com\nmrrobot34404@gmail.com";

  for(let i=0; i<2; i++){
      const splitEmail = email.split('\n').slice(i, email.indexOf('@'));
      console.log(splitEmail);
  }
//output is : [ 'fawadansari31@gmail.com', 'mrrobot34404@gmail.com' ]

// let usernames = [];
//  email.map((value)=>{
//      const username = value.split(0, value.indexOf(" "));
//      usernames.push(username);
//     })
    //console.log(usernames);

  //  convert array to string and get username from email
//     email.map((value)=>{
//  const arrayy = value.slice(0, value.indexOf('@'));
//  console.log(arrayy);
//  console.log(typeof(arrayy));
//     });
//  let username = "   fAwaD";
//  username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
//  console.log(username);