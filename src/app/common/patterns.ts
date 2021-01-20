export enum Patterns {
    numberPattern ='^[0-9]+$',
    namePattern='^[a-zA-Z][a-zA-Z\\s-]*$',
    emailPattern='^[A-Za-z]+[\\w.-]*@[\\w.-]+\\.[A-Za-z]{2,4}$',
    phonePattern='^[()]{1}[1-9]{1}[0-9]{2}[)]{1}[ ]{1}([0-9]{3})[-. ]?([0-9]{4})$',
    alphaNumericPattern='^[a-zA-Z0-9]*$'   
}