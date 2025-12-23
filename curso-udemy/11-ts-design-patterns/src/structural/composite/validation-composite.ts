export abstract class ValidationComponent {
    abstract validate(value: unknown): boolean
}

export class ValidateLetter extends ValidationComponent {
    validate(value: unknown): boolean {
        if (typeof value !== 'string') return false
        return /[A-Za-z0-9]/.test(value)
    }
}

export class ValidateNumber extends ValidationComponent {
    validate(value: unknown): boolean {
        if (typeof value !== 'string') return false
        return /\d+/.test(value)
    }
}

export class ValidationComposite extends ValidationComponent {
    private readonly children: ValidationComponent[] = []

    validate(value: unknown): boolean {
        for (const child of this.children) {
            const validation = child.validate(value)
            if (!validation) return false
        }

        return true
    }

    add(...validations: ValidationComponent[]): void {
        validations.forEach((validation) => this.children.push(validation))
    }
}

const validateLetter = new ValidateLetter()
const validateNumber = new ValidateNumber()
const validationComposite = new ValidationComposite()
validationComposite.add(validateLetter, validateNumber)
console.log(validationComposite.validate('a0'))
