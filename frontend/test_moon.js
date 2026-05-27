const getMoonPhase = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 3) { year--; month += 12; }
    let c = 365.25 * year;
    let e = 30.6 * month;
    let total = c + e + day - 694039.09; // jd
    let phase = total / 29.53058867; // divide by lunar cycle
    phase -= Math.floor(phase); // get fraction

    console.log(`Debug: Date=${date.toISOString()}, PhaseValue=${phase.toFixed(4)}`);

    if (phase < 0.03) return "New Moon";
    if (phase < 0.25) return "Waxing Crescent";
    if (phase < 0.28) return "First Quarter";
    if (phase < 0.50) return "Waxing Gibbous";
    if (phase < 0.53) return "Full Moon";
    if (phase < 0.75) return "Waning Gibbous";
    if (phase < 0.78) return "Last Quarter";
    return "Waning Crescent";
};

// Test for Jan 11, 2026 (User's seemingly current date based on verified logs)
const checkDate = new Date('2026-01-11T12:00:00Z');
console.log(`Moon Phase for Jan 11: ${getMoonPhase(checkDate)}`);
