import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AccountUpdateOneRequiredWithoutTransactionsNestedInput } from '../account/account-update-one-required-without-transactions-nested.input';
import { CategoryUpdateOneWithoutTransactionsNestedInput } from '../category/category-update-one-without-transactions-nested.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';

@InputType()
export class TransactionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => AccountUpdateOneRequiredWithoutTransactionsNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput;

    @Field(() => CategoryUpdateOneWithoutTransactionsNestedInput, {nullable:true})
    category?: CategoryUpdateOneWithoutTransactionsNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reference?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    currency?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;
}
