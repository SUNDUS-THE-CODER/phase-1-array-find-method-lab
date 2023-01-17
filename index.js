// code your solution here
function superbowlWin(record) {
    const results = record.find((key) => key.result === "W");
    return typeof results === 'undefined' ? results : results.year;
}