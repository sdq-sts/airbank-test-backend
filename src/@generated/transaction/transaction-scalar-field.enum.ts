import { registerEnumType } from '@nestjs/graphql';

export enum TransactionScalarFieldEnum {
    id = "id",
    account_id = "account_id",
    category_id = "category_id",
    reference = "reference",
    amount = "amount",
    currency = "currency",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(TransactionScalarFieldEnum, { name: 'TransactionScalarFieldEnum', description: undefined })
