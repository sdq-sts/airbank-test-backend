
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UpdateTransactionData {
    reference?: Nullable<string>;
    amount?: Nullable<number>;
    currency?: Nullable<string>;
    category?: Nullable<UUID>;
}

export class UpdateTransactionInput {
    id: UUID;
    data?: Nullable<UpdateTransactionData>;
}

export class Account {
    id: UUID;
    name?: Nullable<string>;
    bank?: Nullable<string>;
    created_at: DateTime;
    updated_at: DateTime;
}

export class Category {
    id: UUID;
    name?: Nullable<string>;
    color?: Nullable<string>;
    created_at: DateTime;
    updated_at: DateTime;
}

export class Transaction {
    id: UUID;
    reference?: Nullable<string>;
    amount?: Nullable<number>;
    currency?: Nullable<string>;
    account?: Nullable<Account>;
    category?: Nullable<Category>;
    created_at: DateTime;
    updated_at: DateTime;
}

export abstract class IQuery {
    abstract transactions(cursor?: Nullable<string>, search?: Nullable<string>, bank?: Nullable<string>, account?: Nullable<string>, startDate?: Nullable<string>, endDate?: Nullable<string>, perPage?: Nullable<number>): Nullable<Transaction>[] | Promise<Nullable<Transaction>[]>;

    abstract transaction(id: string): Nullable<Transaction> | Promise<Nullable<Transaction>>;
}

export abstract class IMutation {
    abstract updateTransaction(updateTransactionInput: UpdateTransactionInput): Transaction | Promise<Transaction>;
}

export type UUID = any;
export type DateTime = any;
type Nullable<T> = T | null;
