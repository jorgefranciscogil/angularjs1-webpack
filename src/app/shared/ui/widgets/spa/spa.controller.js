class SPACtrl {

    constructor(MockUserEntity) {
        this.userName = MockUserEntity.getName();
    }

}

SPACtrl.$inject = ['MockUserEntity'];
export { SPACtrl }