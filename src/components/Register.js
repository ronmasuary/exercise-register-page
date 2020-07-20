import React, { useState } from "react";

export default function Register() {


//------------------------------------------------------------------------------------------------------------------------
// סטייטים שבתוכם ולדיציות. אמת או שקר.
// בהתחלה כל הסטייטים הם "שקר" כי כל האינפוטים עדיין ריקים,כלומר, לא חוקיים    
  const [validName, setValidName] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validAge, setValidAge] = useState(false);


//-----------------------------------------------------------------------------------------------------------------------
//סטייטים שיכילו את כל הפרטים שהמשתמש מכניס  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [age, setAge] = useState("");


//-----------------------------------------------------------------------------------------------------------------------
// פונקציה לשינוי השם. נקראת כאשר האינפוט משתנה
// יצרתי משתנה מקומי שיכיל את האינפוט הנוכחי כדי לעדכן את הסטייט של הולדידציות.
// אם הייתי משנה את הסטטיט של שם המשתמש ישירות ובודק האם הוא חוקי, התנאי היה מתייחס לסטייט של שם המשתמש הקודם
// כי הסטייט מעודכן רק אחרי רינדור ואני עדיין באותה פונקציה, כלומר לא היה עדיין רינדור
  const changeName = e => {
    let name=e.target.value;
    setUserName(name)
    if (name.length >= 6 && name.length <= 8) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };


//------------------------------------------------------------------------------------------------------------------------
//פונקציה שמשנה את הסטייט של הסיסמא ובודקת האם הוא חוקי או לא בהתאם למה שהוקלד באינפוט
// גם כאן משתנה מקומי בדיוק מאותה הסיבה  
  const changePassword = e => {
    let password=e.target.value;
    setPassword(password)
    if (password.length < 7) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }
  };

//------------------------------------------------------------------------------------------------------------------------
//פונקציה שמשנה את הסטייט של המייל ובודקת אם הוא תקין או לא בהתאם למה שהוקלד באינפוט
// charAt- מכריזים על משתנה חדש שיכיל את המחרוזת. בתוך המחרוזת משתמשים במתודה ובתוך הסוגריים שמים את האינדקס של התו שמחפשים
// כלומר, המשתנה בחדש מכיל בתוכו את התו במיקום המבוקש
//התנאי הוא שאם המשתנה הוא לא התו המתאים אז הערך שהוכנס באינפוט הוא לא חוקי
//גם כאן יש שימוש במשתנה זמני בדיוק כמו קודם  
  const changeEmail = e => {
    let Email=e.target.value;
    setEmail(Email)
    let n = Email.charAt(4);
    if (n === "@") {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

//-------------------------------------------------------------------------------------------------------------------------
// הגיל חייב להיות מספר, את התנאי הזה פתרתי בעזרת האטריביוט של "סוג" והגדרתי אותו כמספר
// ככה שאין למשתמש אפשרות להקליד תו שהוא לא מספר
// התנאי הוא שאם לא הוקלד כלום, כלומר, הגיל הוא מחרוזת ריקה, אז הגיל לא חוקי 
  const changeAge = e => {
    let age=e.target.value;
    setAge(age)
    if (age !== "") {
      setValidAge(true);
    }
  };

  
//------------------------------------------------------------------------------------------------------------------------
//פונקציה שבודקת את כל הסטייטים של הולדיציות, אם אחד מהם הוא שקר אז תקפוץ שגיאה
// אחרת, הודעת הצלחה
// הכפתור קורא לפונקציה הזאת
  const checkUser = () => {
    if (!validName || !validPass || !validEmail || !validAge) {
      alert("Error!");
    } else {
      alert("seccuss!");
    }
  };

  
  return (
    <div>
      <form
        style={{
          border: "2px black solid",
          width: "400px",
          marginTop: "50px",
          marginLeft: "350px",
            borderRadius:'5px'
        }}
      >
        <h3>Register</h3>
        <p>user name:</p>
        <input
          type='text'
          value={userName}
          style={{ backgroundColor: validName ? "green" : "red" }}
          onChange={changeName}
        ></input>

        <p>password:</p>
        <input
          type="password"
          value={password}
          style={{ backgroundColor: validPass ? "green" : "red" }}
          onChange={changePassword}
        ></input>

        <p>Email:</p>
        <input
          type='email'
          value={Email}
          style={{ backgroundColor: validEmail ? "green" : "red" }}
          onChange={changeEmail}
        ></input>

        <p>age:</p>
        <input
          type="number"
          value={age}
          style={{ backgroundColor: validAge ? "green" : "red" }}
          onChange={changeAge}
        ></input>
        <br />
        <br />

        <button onClick={checkUser}>submit</button>
      </form>
    </div>
  );
}
