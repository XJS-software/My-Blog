type some = {
    prop1: 1,
    prop2: 2
}

type ITest = {
    [props in keyof some]: boolean;
};

const haha: ITest = {
    prop1: false,
    prop2: true
}
