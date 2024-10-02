import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // Expression régulière pour valider que l'email se termine par "wilder.school"
    const emailRegex = RegExp('^[a-zA-Z0-9._%+-]+@wilder\\.school$');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'must end with wilder.school'
        }
    };
    return !valid ? errors : null;
}
