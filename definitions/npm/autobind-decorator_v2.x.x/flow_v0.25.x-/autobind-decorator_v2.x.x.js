declare module 'autobind-decorator' {
    declare var autobind: ClassDecorator & MethodDecorator;

    declare export var boundMethod: MethodDecorator;
    declare export var boundClass: ClassDecorator;

    declare export default typeof autobind;
}
