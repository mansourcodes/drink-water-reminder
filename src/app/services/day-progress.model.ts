export class DayProgress {
    constructor(
        public total: number,
        public progress: number,
    ) { }


    add(newValue) {
        this.progress += newValue;
    }
    getPer() {
        return this.progress / this.total * 100;
    }
    getTarget() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDay();


        const countDownDate = new Date(year, month, day, 23, 0, 0).getHours();
        const startDate = new Date(year, month, day, 7, 0, 0).getHours();
        const currentTime = now.getHours();

        const distanceWhole = countDownDate - startDate;
        const distanceRun = currentTime - startDate;


        const progress = distanceRun / distanceWhole;
        return progress * 100;
    }

}
