import { useState } from "react";

interface FormProps {
  submitDiary: (values: {
    date: string;
    visibility: string;
    weather: string;
    comment: string;
  }) => void;
}

const DiaryForm = ({ submitDiary }: FormProps) => {
  const [values, setValues] = useState({
    date: "",
    visibility: "",
    weather: "",
    comment: "",
  });

  const addDiary = (event: React.SyntheticEvent) => {
    event.preventDefault();
    submitDiary(values);
    setValues({
      date: "",
      visibility: "",
      weather: "",
      comment: "",
    });
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={addDiary}>
      <div>
        <input
          type="text"
          name="date"
          value={values.date}
          onChange={handleChange}
        />
        date
      </div>
      <div>
        <input
          type="text"
          name="visibility"
          value={values.visibility}
          onChange={handleChange}
        />
        visibility
      </div>
      <div>
        <input
          type="text"
          name="weather"
          value={values.weather}
          onChange={handleChange}
        />
        weather
      </div>
      <div>
        <input
          type="text"
          name="comment"
          value={values.comment}
          onChange={handleChange}
        />
        comment
      </div>
      <button>add</button>
    </form>
  );
};

export default DiaryForm;
