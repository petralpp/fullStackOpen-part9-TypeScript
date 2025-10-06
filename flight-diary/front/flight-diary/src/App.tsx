import { useEffect, useState } from "react";
import "./App.css";
import { DiaryEntry } from "./types";
import diaryService from "./services/diaryService";
import DiaryForm from "./components/DiaryForm";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    diaryService.getAll().then((data) => {
      setDiaries(data);
    });
  }, []);

  const submitNewDiary = (diary: unknown) => {
    diaryService
      .createEntry(diary)
      .then((result) => {
        const newEntry = result as DiaryEntry;
        setDiaries(diaries.concat(newEntry));
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error?.response.data);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      });
  };

  return (
    <>
      <h2>Add new entry</h2>
      <p className="error">{errorMessage}</p>
      <DiaryForm submitDiary={submitNewDiary} />
      <h2>Diary entries</h2>
      {diaries.map((diary) => (
        <div key={diary.id}>
          <h2>{diary.date}</h2>
          visibility: {diary.visibility} <br />
          weather: {diary.weather} {diary?.comment}
        </div>
      ))}
    </>
  );
}

export default App;
