export class Record {
    constructor(
        public _id: string,
        public image: string,
        public size: number,
        public time: Date,
    ) {

        if (!this._id) {
            this._id = '_' + Math.random().toString(36).substr(2, 9);
        }

    }
}
