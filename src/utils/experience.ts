export const calculateExperience = (startDateStr: string = '2022-11-01') => {
    const startDate = new Date(startDateStr);
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        years,
        months,
        totalYears: (years + months / 12).toFixed(1)
    };
};
