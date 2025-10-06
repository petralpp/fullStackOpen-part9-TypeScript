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
        Date:
        <input
          type="date"
          name="date"
          value={values.date}
          onChange={handleChange}
        />
      </div>
      <div>
        Visibility:
        <input
          type="radio"
          id="great"
          name="visibility"
          value="great"
          onChange={handleChange}
        />
        Great
        <input
          type="radio"
          id="good"
          name="visibility"
          value="good"
          onChange={handleChange}
        />
        Good
        <input
          type="radio"
          id="ok"
          name="visibility"
          value="ok"
          onChange={handleChange}
        />
        Okay
        <input
          type="radio"
          id="poor"
          name="visibility"
          value="poor"
          onChange={handleChange}
        />
        Poor
      </div>
      <div>
        Weather:
        <input
          type="radio"
          id="sunny"
          name="weather"
          value="sunny"
          onChange={handleChange}
        />
        Sunny
        <input
          type="radio"
          id="rainy"
          name="weather"
          value="rainy"
          onChange={handleChange}
        />
        Rainy
        <input
          type="radio"
          id="cloudy"
          name="weather"
          value="cloudy"
          onChange={handleChange}
        />
        Cloudy
        <input
          type="radio"
          id="stormy"
          name="weather"
          value="stormy"
          onChange={handleChange}
        />
        Stormy
        <input
          type="radio"
          id="windy"
          name="weather"
          value="windy"
          onChange={handleChange}
        />
        Windy
      </div>
      <div>
        Comment:
        <input
          type="text"
          name="comment"
          value={values.comment}
          onChange={handleChange}
        />
      </div>
      <button>add</button>
    </form>
  );
};

export default DiaryForm;
