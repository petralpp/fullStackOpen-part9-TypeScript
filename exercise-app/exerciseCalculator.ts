interface HourValues {
  target: number;
  hours: number[];
}

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Rating {
  rating: number;
  description: string;
}

const getRating = (
  success: boolean,
  hours: number,
  days: number,
  target: number
): Rating => {
  let rating;
  let description;

  if (success) {
    rating = 3;
    description = "Daily exercise target achieved!";
  } else if (hours >= days * target) {
    rating = 2;
    description = "Daily exercise not achieved but target hours were met";
  } else {
    rating = 1;
    description = "Daily exercise and target hours were not met";
  }

  return {
    rating,
    description,
  };
};

const parseArguments = (args: string[]): HourValues => {
  if (args.length < 4) throw new Error("Not enough arguments");

  let resultHours = [];

  for (let value of args.slice(2)) {
    if (isNaN(Number(value))) {
      throw new Error("Provided values were not numbers!");
    } else {
      resultHours.push(Number(value));
    }
  }
  return {
    target: resultHours[0],
    hours: resultHours.slice(1),
  };
};

const calculateExercises = (dailyHours: number[], target: number): Result => {
  const days = dailyHours.length;
  const trainingDays = dailyHours.filter((hour) => hour > 0);
  const trainingHours = trainingDays.reduce(
    (result, current) => result + current,
    0
  );
  const success = trainingDays.length === dailyHours.length ? true : false;

  const average = trainingHours / days;
  const ratingResult = getRating(success, trainingHours, days, target);

  return {
    periodLength: days,
    trainingDays: trainingDays.length,
    success: success,
    rating: ratingResult.rating,
    ratingDescription: ratingResult.description,
    target: target,
    average: average,
  };
};

try {
  const { target, hours } = parseArguments(process.argv);
  console.log(calculateExercises(hours, target));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

export default calculateExercises;
