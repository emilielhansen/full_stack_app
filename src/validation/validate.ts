
export namespace Validation {
    export enum ValidationType {
        REQUIRED,
        MIN,
        MAX,
        EMAIL,
        EQUAL,
        GREATER,
        TRUE
    }

    interface ValidationTypeMinProps {
        min: number;
    }

    interface ValidationTypeMaxProps {
        max: number;
    }

    interface ValidationTypeEqualProps {
        equal: string;
    }

    interface ValidationTypeGreaterProps {
        greater: number;
    }

    type ValidatorTypes = ValidationTypeMinProps | ValidationTypeMaxProps | ValidationTypeEqualProps | ValidationTypeGreaterProps;

    export type Validator = ValidatorInterface<ValidatorTypes>;

    export interface ValidatorInterface<ValidatorTypes> {
        validatorType : ValidationType;
        message : string;
        props?: ValidatorTypes;
    }

    export interface ValidationResponse {
        valid : boolean;
        errors : Validator[];
    }

    export const validate = (
        value: any, 
        validators: Validator[]
    ) : ValidationResponse => {
        const response : ValidationResponse = {
            valid : true,
            errors : []
        };

        validators.forEach((validator: Validator) => {
            switch(validator.validatorType) {
                case ValidationType.REQUIRED : 
                    if(value === undefined || value === null || value.trim() === "") {
                        response.errors.push(validator)
                    }
                    break;
                case ValidationType.EMAIL :
                    if(!String(value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                        response.errors.push(validator);
                    }
                    break;
                case ValidationType.MIN :
                    const min: number | undefined = (validator.props as ValidationTypeMinProps).min;
                    
                    if(!value || (min && value.length < min)) {
                        response.errors.push(validator);
                    }
                    break;
                case ValidationType.MAX :
                    const max: number | undefined = (validator.props as ValidationTypeMaxProps).max;
                    
                    if(!value || (max && value.length > max)) {
                        response.errors.push(validator);
                    }
                    break;
                case ValidationType.EQUAL :
                    const equal: string | undefined = (validator.props as ValidationTypeEqualProps).equal;
                    
                    if(equal && value !== equal) {
                        response.errors.push(validator);
                    }
                    break;
                case ValidationType.GREATER :
                    const num = parseInt(value);
                    const greater = (validator.props as ValidationTypeGreaterProps).greater;
                    if(greater && (isNaN(num) || num < greater)) {
                        response.errors.push(validator);
                    }
                    break;
                case ValidationType.TRUE :
                    if((value as boolean)) {
                        response.errors.push(validator);
                    }
                    break;
            }
        });

        if(response.errors.length > 0) response.valid = false;

        return response;
    }
}