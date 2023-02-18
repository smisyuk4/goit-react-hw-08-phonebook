export const checkUniq = (name, data) => {
    const newName = name.toLowerCase();
    return data.find(({ name }) => name.toLowerCase() === newName);
};   