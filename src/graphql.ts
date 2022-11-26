
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateTransactionInput {
    reference?: Nullable<string>;
    category?: Nullable<string>;
    amount?: Nullable<number>;
    createdAt: DateTime;
}

export class UpdateTransactionInput {
    reference?: Nullable<string>;
    category?: Nullable<string>;
    amount?: Nullable<number>;
}

export class Transaction {
    id: UUID;
    reference?: Nullable<string>;
    category?: Nullable<string>;
    amount?: Nullable<number>;
    createdAt: DateTime;
}

export abstract class IQuery {
    abstract transactions(): Nullable<Transaction>[] | Promise<Nullable<Transaction>[]>;

    abstract transaction(id: number): Nullable<Transaction> | Promise<Nullable<Transaction>>;
}

export abstract class IMutation {
    abstract createTransaction(createTransactionInput: CreateTransactionInput): Transaction | Promise<Transaction>;

    abstract updateTransaction(updateTransactionInput: UpdateTransactionInput): Transaction | Promise<Transaction>;

    abstract removeTransaction(id: number): Nullable<Transaction> | Promise<Nullable<Transaction>>;
}

export type UUID = any;
export type DateTime = any;
type Nullable<T> = T | null;
