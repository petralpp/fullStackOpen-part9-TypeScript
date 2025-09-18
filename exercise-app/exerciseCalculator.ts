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
    description = "Target achieved!";
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

const calculateExercises = (dailyHours: number[], target: number): Result => {
  const days = dailyHours.length;
  let success = true;
  let trainingDays = 0;
  let trainingHours = 0;

  for (let hour of dailyHours) {
    if (hour < target) {
      success = false;
    }
    if (hour > 0) {
      trainingDays++;
      trainingHours += hour;
    }
  }
  const average = trainingHours / days;
  const ratingResult = getRating(success, trainingHours, days, target);

  return {
    periodLength: days,
    trainingDays: trainingDays,
    success: success,
    rating: ratingResult.rating,
    ratingDescription: ratingResult.description,
    target: target,
    average: average,
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
console.log(calculateExercises([3, 0, 2, 0, 3, 3, 4], 2));
console.log(calculateExercises([3, 2, 2, 4.5, 3, 3, 4], 2));
