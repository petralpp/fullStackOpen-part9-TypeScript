import { useEffect, useState } from "react";
import "./App.css";
import { DiaryEntry } from "./types";
import diaryService from "./services/diaryService";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    diaryService.getAll().then((data) => {
      setDiaries(data);
    });
  }, []);

  return (
    <>
      <h1>Diary entries</h1>
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
