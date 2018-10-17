export default function classNameHash(className, modificators = {}, mix = null) {
    let classList = [className];

    function join(classname, modif, value) {
        if (value === true) {
            return classname + '_' + modif;
        } else {
            return classname + '_' + modif + '_' + value;
        }
    }

    Object.keys(modificators).forEach((el) => {
        if (modificators[el]) {
            classList.push(join(className, el, modificators[el]))
        }
    });

    if (mix) {
        classList.push(mix)
    }

    return classList.join(' ');
}
