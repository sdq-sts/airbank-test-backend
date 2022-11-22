
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateTransactionInput {
    exampleField?: Nullable<number>;
}

export class UpdateTransactionInput {
    id: number;
}

export class Transaction {
    exampleField?: Nullable<number>;
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

type Nullable<T> = T | null;
