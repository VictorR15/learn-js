export const rectPerimeter = (x, y) => 2 * (x + y);
export const rectArea = (x, y) => x * y;
export const triArea = (x, y) => (x * y) / 2;
export const ringArea = (x, y) => Math.PI * (Math.pow(y, 2) - Math.pow(x, 2));
export const f2c = (f) => (f - 32) / 1.8;
export const c2f = (c) => c * 1.8 + 32;
export const makeName = (first, last) => `${last}, ${first}`;
export const ellide = (string, number) => `${string.slice(0, 6)}...`;
export const longer = (word1, word2) => {
  if (word1.length < word2.length) {
    return word2;
  }
  return word1;
};

export const mid3 = (a, b, c) => {
  const arry = [a, b, c];
  const order = arry.sort((x, y) => x - y).slice(1, 2);

  return order[0];
};

export const lastFirst = (objeto) => {
  const { first = "", last = "" } = objeto;

  if (first === "") {
    return `${last}`;
  }
  if (last === "") {
    return `${first}`;
  }

  return `${last}, ${first}`;
};

export const subArray = (arg1, arg2) => {
  return arg2.map((i) => arg1[i]);
};

export const over21 = (personArray) => {
  return personArray.filter((person) => {
    return 21 <= person.age;
  });
};

export const product = (product) => {
  return product.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
};

export const getRepeats = (array) => {
  let duplicates = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !duplicates.includes(array[i])) {
        duplicates.push(array[i]);
      }
    }
  }
  return duplicates;
};

export const aboveAverage = (examScores) => {
  let averageExam = 0;
  examScores.map((exam) => {
    averageExam = averageExam + exam.score;
  });

  averageExam = averageExam / examScores.length;

  return examScores.filter((exam) => {
    return exam.score > averageExam ? true : false;
  });
};

export const reverseNumber = (number) => {
  const reverse = number.toString().split("").reverse().join("");
  return parseInt(reverse);
};

export const isWordAnagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  const word = (word) => {
    word.toLowerCase().split("").sort().join("");
  };

  if (word(word1) === word(word2)) {
    return true;
  }
};

export const isPhraseAnagram = (word1, word2) => {
  const word = (word) => {
    return word.toLowerCase().replaceAll(" ", "").split("").sort().join("");
  };

  return word(word1) === word(word2) ? true : false;
};

export const longestWords = (phrase) => {
  if (phrase === "") return [];
  const arrayWords = phrase.split(" ");

  const wordLenght = arrayWords.map((word) => {
    return word.length;
  });

  const max = Math.max(...wordLenght);

  return arrayWords.filter((word) => {
    return word.length === max;
  });
};

export const moduleTitles = () => {
  // const titles = document.querySelectorAll(".module-title");
  const titles = Array.from(document.querySelectorAll(".module-title")).map(
    (h) => h.innerText,
  );
  return titles;
};

export const goPurple = () => {
  const subTitle = document.querySelector('[data-bs-target="#goPurple"]');
  subTitle.style.color = "purple";
  return "Go Purple!";
};

export const copycat = (n) => {
  const answers = {
    1: 100,
    2: "hello!",
    3: [1, 2, 3],
  };

  return answers[n];
};
