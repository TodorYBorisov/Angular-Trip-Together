import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(
    password: string,
    rePassword: string
): ValidatorFn {

    return (control) => {

        const group = control as FormGroup;

        const valuePass = group.get(password)
        const valueRePass = group.get(rePassword)

        return valuePass?.value === valueRePass?.value ? null : {matchPasswordsValidator: true}
    };
}