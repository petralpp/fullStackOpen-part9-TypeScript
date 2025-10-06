import { useEffect, useState } from "react";
import "./App.css";
import { DiaryEntry } from "./types";
import diaryService from "./services/diaryService";
import DiaryForm from "./components/DiaryForm";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    diaryService.getAll().then((data) => {
      setDiaries(data);
    });
  }, []);

  const submitNewDiary = (diary: unknown) => {
    diaryService.createEntry(diary).then((result) => {
      const newEntry = result as DiaryEntry;
      setDiaries(diaries.concat(newEntry));
    });
  };

  return (
    <>
      <h2>Add new entry</h2>
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
