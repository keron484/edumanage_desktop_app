function CleanArrayData(dataArray, keys, filterFn) {
    return dataArray
        .filter(filterFn || (() => true))
        .map(item => {
            const cleanedItem = {};
            keys.forEach(key => {
                const nestedKeys = key.split('.');
                if (nestedKeys.length > 1) {
                    let nestedValue = item;
                    nestedKeys.forEach(nestedKey => {
                        if (nestedValue && nestedKey in nestedValue) {
                            nestedValue = nestedValue[nestedKey];
                        } else {
                            nestedValue = undefined; 
                        }
                    });
                    if (key.endsWith('created_at') || key.endsWith('updated_at')) {
                        cleanedItem[key] = formatDate(nestedValue);
                    } else {
                        cleanedItem[key] = nestedValue;
                    }
                } else if (key in item) {
                    if (key === 'created_at' || key === 'updated_at') {
                        cleanedItem[key] = formatDate(item[key]);
                    } else {
                        cleanedItem[key] = item[key];
                    }
                }
            });
            return cleanedItem;
        });
}

export default CleanArrayData;

export function renameKeys(dataArray, renameMap) {
    return dataArray.map(item => {
        const renamedItem = {};
        
        // Iterate over the keys in the item and rename as per the renameMap
        for (const key in item) {
            const newKey = renameMap[key] || key; // Use the new key if it exists in the map, otherwise keep original
            renamedItem[newKey] = item[key];
        }

        return renamedItem;
    });
}


export function IsPathInRoutes(routes) {
    return routes.includes(location.pathname);
}

export function generateMonthlyWeeks(year, month) {
    const weeks = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthAbbreviations = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    const monthAbbreviation = monthAbbreviations[month];
    let currentWeek = [];
    let weekIndex = 1;
  
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();
  
      const dayObj = {
        abbreviation: weekDays[dayOfWeek],
        fullName: date.toLocaleString("default", { weekday: "long" }),
        date: day, // Store the actual date
      };
  
      currentWeek[dayOfWeek] = dayObj;
  
      if (dayOfWeek === 6 || day === daysInMonth) {
        weeks.push({
          week: `${weekIndex}`,
          abbreviation: monthAbbreviation,
          days: currentWeek.filter(Boolean),
        });
  
        currentWeek = [];
        weekIndex++;
      }
    }
  
    return weeks;
  }

export const generateYearlyMonthData = (year) => {
    const monthData = [
        { name: "January", abbreviation: "Jan", days: 31 },
        { name: "February", abbreviation: "Feb", days: (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28 },
        { name: "March", abbreviation: "Mar", days: 31 },
        { name: "April", abbreviation: "Apr", days: 30 },
        { name: "May", abbreviation: "May", days: 31 },
        { name: "June", abbreviation: "Jun", days: 30 },
        { name: "July", abbreviation: "Jul", days: 31 },
        { name: "August", abbreviation: "Aug", days: 31 },
        { name: "September", abbreviation: "Sep", days: 30 },
        { name: "October", abbreviation: "Oct", days: 31 },
        { name: "November", abbreviation: "Nov", days: 30 },
        { name: "December", abbreviation: "Dec", days: 31 }
    ];

    const yearlyData = {};
    monthData.forEach((month) => {
        const weeks = [];
        const totalDays = month.days;
        const numberOfWeeks = Math.ceil(totalDays / 7);
        for (let week = 1; week <= numberOfWeeks; week++) {
            weeks.push(`Week ${week}`);
        }
        yearlyData[month.name] = {
            abbreviation: month.abbreviation,
            weeks: weeks,
            totalDays: totalDays,
            year: year
        };
    });

    return yearlyData;
};

export  function convertToReadableDate(isoString) {
    /**
     * Converts an ISO 8601 formatted date string to a readable date format.
     *
     * @param {string} isoString - The date string in ISO 8601 format.
     * @returns {string} - The formatted date string in "Month, Year, HH:MM AM/PM" format.
     */
    try {
        // Create a Date object from the ISO string.
        const date = new Date(isoString);

        // Check for an invalid date
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date format');
        }

        // Define options for formatting
        const options = {
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };

        // Use toLocaleString to format the date
        const formattedDate = date.toLocaleString('en-US', options);

        return formattedDate;
    } catch (error) {
        return `Error parsing date: ${error.message}`;
    }
}

export function timeSince(date) {
    /**
     * Calculates the time elapsed from a given date until now.
     *
     * @param {Date} date - A Date object representing the creation time.
     * @returns {string} - A human-readable string indicating the time elapsed.
     */
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);  // Convert milliseconds to seconds

    let interval = Math.floor(seconds / 31536000); // Seconds in a year
    if (interval >= 1) {
        return interval === 1 ? "1 year ago" : `${interval} years ago`;
    }

    interval = Math.floor(seconds / 2592000); // Seconds in a month
    if (interval >= 1) {
        return interval === 1 ? "1 month ago" : `${interval} months ago`;
    }

    interval = Math.floor(seconds / 604800); // Seconds in a week
    if (interval >= 1) {
        return interval === 1 ? "1 week ago" : `${interval} weeks ago`;
    }

    interval = Math.floor(seconds / 86400); // Seconds in a day
    if (interval >= 1) {
        return interval === 1 ? "1 day ago" : `${interval} days ago`;
    }

    interval = Math.floor(seconds / 3600); // Seconds in an hour
    if (interval >= 1) {
        return interval === 1 ? "1 hour ago" : `${interval} hours ago`;
    }

    interval = Math.floor(seconds / 60); // Seconds in a minute
    if (interval >= 1) {
        return interval === 1 ? "1 minute ago" : `${interval} minutes ago`;
    }

    return "just now";
}


export function formatNumber(value, decimalPlaces = 0) {
   // Check if the input is a number
   if (isNaN(value)) {
       throw new Error('Invalid number provided');
   }

   // Round to the specified number of decimal places
   const roundedValue = Number(value).toFixed(decimalPlaces);

   // Split the number into whole and decimal parts
   const parts = roundedValue.split('.');
   const wholePart = parts[0];
   const decimalPart = parts.length > 1 ? '.' + parts[1] : '';

   // Add commas to the whole part using a regular expression
   const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

   // Return the formatted number
   return formattedWholePart + decimalPart;
}


export  function isInteger(value) {
    return typeof value === 'number' && Number.isInteger(value);
}

export function isDecimal(value) {
    return typeof value === 'number' && !Number.isNaN(value) && !Number.isInteger(value);
}

export function sumAttribute(arr, attribute) {
    return arr.reduce((total, item) => {
        const value = Number(item[attribute]); 
        console.table(arr);
        return total + (isNaN(value) ? 0 : value); 
    }, 0);
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) {
        throw new Error("Invalid date format. Please use YYYY-MM-DD.");
    }
    const options = {
        weekday: 'long',
        month: 'long',
        year: 'numeric'
    };
    const day = date.getDate();
    const dayWithSuffix = day + (day % 10 === 1 && day !== 11 ? 'st' :
                       day % 10 === 2 && day !== 12 ? 'nd' :
                       day % 10 === 3 && day !== 13 ? 'rd' : 'th');
    const weekdayMonthYear = date.toLocaleDateString('en-US', options);
    const parts = weekdayMonthYear.split(' ');
    const formattedDate = `${parts[2]}, ${parts[0]} ${dayWithSuffix}, ${parts[1]}`;
    return formattedDate;
}

export function formatDateWithAge(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) {
        throw new Error("Invalid date format. Please use YYYY-MM-DD.");
    }
    const options = {
        weekday: 'long',
        month: 'long',
        year: 'numeric'
    };
    const day = date.getDate();
    const dayWithSuffix = day + (day % 10 === 1 && day !== 11 ? 'st' :
                       day % 10 === 2 && day !== 12 ? 'nd' :
                       day % 10 === 3 && day !== 13 ? 'rd' : 'th');
    const weekdayMonthYear = date.toLocaleDateString('en-US', options);
    const parts = weekdayMonthYear.split(' ');
    const formattedDate = `${parts[2]}, ${parts[0]} ${dayWithSuffix}, ${parts[1]}`;

    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        age--;
    }
    const result = `${formattedDate} - ${age} years old`;

    return result;
}

/**
 * Formats a duration given hours and minutes into a string.
 * 
 * @param {number} hours - The number of hours.
 * @param {number} minutes - The number of minutes.
 * @returns {string} - The formatted duration string.
 */
export const formatDuration = (hours, minutes) => {
    let durationString = '';

    // Add hours if present
    if (hours > 0) {
        durationString += `${hours} hour${hours > 1 ? 's' : ''}`;
    }

    // Add minutes only if greater than zero
    if (minutes > 0) {
        if (durationString) {
            durationString += ' '; // Add space if hours were also added
        }
        durationString += `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }

    // Return formatted string or default to "0 minutes"
    return durationString || '0 minutes';
};

/**
 * Formats a date string to return the day of the week (e.g., "Wed").
 * @param {string} dateStr - The date string (YYYY-MM-DD).
 * @returns {string} - Formatted day of the week.
 */
export const getWeekday = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short" }); // "Wed"
  };
  
  /**
   * Formats a date string to return the day of the month (e.g., "23").
   * @param {string} dateStr - The date string (YYYY-MM-DD).
   * @returns {string} - Formatted day of the month.
   */
 export  const getDayOfMonth = (dateStr) => {
    const date = new Date(dateStr);
    return date.getDate().toString(); // "23"
  };
  