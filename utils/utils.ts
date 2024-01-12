
export const deepCopy = <T>(obj: T): T => {
    if (obj === null || typeof obj !== "object") {
      return obj
    }
  
    const copy: any = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key])
      }
    }
  
    return copy
  }

export const getRandomValue = (data: any) => {
    if (!Array.isArray(data)) return data;
    return data[Math.floor(Math.random() * data.length)];
  };