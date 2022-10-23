const getValue = (key) => {
    try {
        const value = localStorage.getItem(key);
        const parsedValue = JSON.parse(value)
        return parsedValue;

    }
    catch (err) {
        return undefined;
    }
}



const setValue = (key, values) => {
    localStorage.setItem(key, JSON.stringify(values))
}

module.exports = { getValue, setValue }