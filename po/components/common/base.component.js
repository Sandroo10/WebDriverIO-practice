class BaseComponent {
    constructor(rootSelector){
        this.rootSelector = rootSelector;
    }

    get root(){
        return $(this.rootSelector);
    }
}

module.exports = BaseComponent;