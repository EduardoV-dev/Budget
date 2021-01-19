const setAlertColor = (budget: number, remaining: number): string => {
    let className: string = '';

    if (remaining <= (budget / 4)) {
        className = 'alert alert-danger px-3 py-2';
    } else if (remaining <= (budget / 2)) {
        className = 'alert alert-warning px-3 py-2';
    } else {
        className = 'alert alert-primary px-3 py-2';
    }

    return className;
}

export { setAlertColor };