
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Appointement
 * 
 */
export type Appointement = $Result.DefaultSelection<Prisma.$AppointementPayload>
/**
 * Model Clinic
 * 
 */
export type Clinic = $Result.DefaultSelection<Prisma.$ClinicPayload>
/**
 * Model ClinicServices
 * 
 */
export type ClinicServices = $Result.DefaultSelection<Prisma.$ClinicServicesPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Perscription
 * 
 */
export type Perscription = $Result.DefaultSelection<Prisma.$PerscriptionPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleEnum: {
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  RECEPTIONIST: 'RECEPTIONIST',
  PATIENT: 'PATIENT'
};

export type RoleEnum = (typeof RoleEnum)[keyof typeof RoleEnum]


export const GenderEnum: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type GenderEnum = (typeof GenderEnum)[keyof typeof GenderEnum]

}

export type RoleEnum = $Enums.RoleEnum

export const RoleEnum: typeof $Enums.RoleEnum

export type GenderEnum = $Enums.GenderEnum

export const GenderEnum: typeof $Enums.GenderEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointements
 * const appointements = await prisma.appointement.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointements
   * const appointements = await prisma.appointement.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.appointement`: Exposes CRUD operations for the **Appointement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointements
    * const appointements = await prisma.appointement.findMany()
    * ```
    */
  get appointement(): Prisma.AppointementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clinic`: Exposes CRUD operations for the **Clinic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinics
    * const clinics = await prisma.clinic.findMany()
    * ```
    */
  get clinic(): Prisma.ClinicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clinicServices`: Exposes CRUD operations for the **ClinicServices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClinicServices
    * const clinicServices = await prisma.clinicServices.findMany()
    * ```
    */
  get clinicServices(): Prisma.ClinicServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perscription`: Exposes CRUD operations for the **Perscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perscriptions
    * const perscriptions = await prisma.perscription.findMany()
    * ```
    */
  get perscription(): Prisma.PerscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Appointement: 'Appointement',
    Clinic: 'Clinic',
    ClinicServices: 'ClinicServices',
    Invoice: 'Invoice',
    Perscription: 'Perscription',
    Role: 'Role',
    Service: 'Service',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "appointement" | "clinic" | "clinicServices" | "invoice" | "perscription" | "role" | "service" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Appointement: {
        payload: Prisma.$AppointementPayload<ExtArgs>
        fields: Prisma.AppointementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointementPayload>
          }
          findFirst: {
            args: Prisma.AppointementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointementPayload>
          }
          findMany: {
            args: Prisma.AppointementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointementPayload>[]
          }
          create: {
            args: Prisma.AppointementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointementPayload>
          }
          createMany: {
            args: Prisma.AppointementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointementPayload>[]
          }
          delete: {
            args: Prisma.AppointementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointementPayload>
          }
          update: {
            args: Prisma.AppointementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointementPayload>
          }
          deleteMany: {
            args: Prisma.AppointementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointementPayload>[]
          }
          upsert: {
            args: Prisma.AppointementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointementPayload>
          }
          aggregate: {
            args: Prisma.AppointementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointement>
          }
          groupBy: {
            args: Prisma.AppointementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointementCountArgs<ExtArgs>
            result: $Utils.Optional<AppointementCountAggregateOutputType> | number
          }
        }
      }
      Clinic: {
        payload: Prisma.$ClinicPayload<ExtArgs>
        fields: Prisma.ClinicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          findFirst: {
            args: Prisma.ClinicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          findMany: {
            args: Prisma.ClinicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          create: {
            args: Prisma.ClinicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          createMany: {
            args: Prisma.ClinicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          delete: {
            args: Prisma.ClinicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          update: {
            args: Prisma.ClinicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          deleteMany: {
            args: Prisma.ClinicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClinicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          upsert: {
            args: Prisma.ClinicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          aggregate: {
            args: Prisma.ClinicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinic>
          }
          groupBy: {
            args: Prisma.ClinicGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicCountAggregateOutputType> | number
          }
        }
      }
      ClinicServices: {
        payload: Prisma.$ClinicServicesPayload<ExtArgs>
        fields: Prisma.ClinicServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicServicesPayload>
          }
          findFirst: {
            args: Prisma.ClinicServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicServicesPayload>
          }
          findMany: {
            args: Prisma.ClinicServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicServicesPayload>[]
          }
          create: {
            args: Prisma.ClinicServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicServicesPayload>
          }
          createMany: {
            args: Prisma.ClinicServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicServicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicServicesPayload>[]
          }
          delete: {
            args: Prisma.ClinicServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicServicesPayload>
          }
          update: {
            args: Prisma.ClinicServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicServicesPayload>
          }
          deleteMany: {
            args: Prisma.ClinicServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClinicServicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicServicesPayload>[]
          }
          upsert: {
            args: Prisma.ClinicServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicServicesPayload>
          }
          aggregate: {
            args: Prisma.ClinicServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinicServices>
          }
          groupBy: {
            args: Prisma.ClinicServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicServicesCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicServicesCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Perscription: {
        payload: Prisma.$PerscriptionPayload<ExtArgs>
        fields: Prisma.PerscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerscriptionPayload>
          }
          findFirst: {
            args: Prisma.PerscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerscriptionPayload>
          }
          findMany: {
            args: Prisma.PerscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerscriptionPayload>[]
          }
          create: {
            args: Prisma.PerscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerscriptionPayload>
          }
          createMany: {
            args: Prisma.PerscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerscriptionPayload>[]
          }
          delete: {
            args: Prisma.PerscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerscriptionPayload>
          }
          update: {
            args: Prisma.PerscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerscriptionPayload>
          }
          deleteMany: {
            args: Prisma.PerscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerscriptionPayload>[]
          }
          upsert: {
            args: Prisma.PerscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerscriptionPayload>
          }
          aggregate: {
            args: Prisma.PerscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerscription>
          }
          groupBy: {
            args: Prisma.PerscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PerscriptionCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    appointement?: AppointementOmit
    clinic?: ClinicOmit
    clinicServices?: ClinicServicesOmit
    invoice?: InvoiceOmit
    perscription?: PerscriptionOmit
    role?: RoleOmit
    service?: ServiceOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AppointementCountOutputType
   */

  export type AppointementCountOutputType = {
    perscriptions: number
  }

  export type AppointementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perscriptions?: boolean | AppointementCountOutputTypeCountPerscriptionsArgs
  }

  // Custom InputTypes
  /**
   * AppointementCountOutputType without action
   */
  export type AppointementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointementCountOutputType
     */
    select?: AppointementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointementCountOutputType without action
   */
  export type AppointementCountOutputTypeCountPerscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerscriptionWhereInput
  }


  /**
   * Count Type ClinicCountOutputType
   */

  export type ClinicCountOutputType = {
    services: number
    appointements: number
    users: number
  }

  export type ClinicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ClinicCountOutputTypeCountServicesArgs
    appointements?: boolean | ClinicCountOutputTypeCountAppointementsArgs
    users?: boolean | ClinicCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicCountOutputType
     */
    select?: ClinicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicServicesWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountAppointementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointementWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    clinics: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinics?: boolean | ServiceCountOutputTypeCountClinicsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountClinicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicServicesWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointement_as_doctor: number
    appointement_as_patient: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointement_as_doctor?: boolean | UserCountOutputTypeCountAppointement_as_doctorArgs
    appointement_as_patient?: boolean | UserCountOutputTypeCountAppointement_as_patientArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointement_as_doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointement_as_patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Appointement
   */

  export type AggregateAppointement = {
    _count: AppointementCountAggregateOutputType | null
    _avg: AppointementAvgAggregateOutputType | null
    _sum: AppointementSumAggregateOutputType | null
    _min: AppointementMinAggregateOutputType | null
    _max: AppointementMaxAggregateOutputType | null
  }

  export type AppointementAvgAggregateOutputType = {
    id: number | null
    doctor_id: number | null
    patient_id: number | null
    clinic_id: number | null
  }

  export type AppointementSumAggregateOutputType = {
    id: number | null
    doctor_id: number | null
    patient_id: number | null
    clinic_id: number | null
  }

  export type AppointementMinAggregateOutputType = {
    id: number | null
    date: Date | null
    subject: string | null
    description: string | null
    is_canceled: boolean | null
    doctor_id: number | null
    patient_id: number | null
    clinic_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AppointementMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    subject: string | null
    description: string | null
    is_canceled: boolean | null
    doctor_id: number | null
    patient_id: number | null
    clinic_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AppointementCountAggregateOutputType = {
    id: number
    date: number
    subject: number
    description: number
    is_canceled: number
    doctor_id: number
    patient_id: number
    clinic_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AppointementAvgAggregateInputType = {
    id?: true
    doctor_id?: true
    patient_id?: true
    clinic_id?: true
  }

  export type AppointementSumAggregateInputType = {
    id?: true
    doctor_id?: true
    patient_id?: true
    clinic_id?: true
  }

  export type AppointementMinAggregateInputType = {
    id?: true
    date?: true
    subject?: true
    description?: true
    is_canceled?: true
    doctor_id?: true
    patient_id?: true
    clinic_id?: true
    created_at?: true
    updated_at?: true
  }

  export type AppointementMaxAggregateInputType = {
    id?: true
    date?: true
    subject?: true
    description?: true
    is_canceled?: true
    doctor_id?: true
    patient_id?: true
    clinic_id?: true
    created_at?: true
    updated_at?: true
  }

  export type AppointementCountAggregateInputType = {
    id?: true
    date?: true
    subject?: true
    description?: true
    is_canceled?: true
    doctor_id?: true
    patient_id?: true
    clinic_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AppointementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointement to aggregate.
     */
    where?: AppointementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointements to fetch.
     */
    orderBy?: AppointementOrderByWithRelationInput | AppointementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointements
    **/
    _count?: true | AppointementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointementMaxAggregateInputType
  }

  export type GetAppointementAggregateType<T extends AppointementAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointement[P]>
      : GetScalarType<T[P], AggregateAppointement[P]>
  }




  export type AppointementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointementWhereInput
    orderBy?: AppointementOrderByWithAggregationInput | AppointementOrderByWithAggregationInput[]
    by: AppointementScalarFieldEnum[] | AppointementScalarFieldEnum
    having?: AppointementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointementCountAggregateInputType | true
    _avg?: AppointementAvgAggregateInputType
    _sum?: AppointementSumAggregateInputType
    _min?: AppointementMinAggregateInputType
    _max?: AppointementMaxAggregateInputType
  }

  export type AppointementGroupByOutputType = {
    id: number
    date: Date
    subject: string
    description: string
    is_canceled: boolean
    doctor_id: number
    patient_id: number
    clinic_id: number
    created_at: Date
    updated_at: Date
    _count: AppointementCountAggregateOutputType | null
    _avg: AppointementAvgAggregateOutputType | null
    _sum: AppointementSumAggregateOutputType | null
    _min: AppointementMinAggregateOutputType | null
    _max: AppointementMaxAggregateOutputType | null
  }

  type GetAppointementGroupByPayload<T extends AppointementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointementGroupByOutputType[P]>
            : GetScalarType<T[P], AppointementGroupByOutputType[P]>
        }
      >
    >


  export type AppointementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    subject?: boolean
    description?: boolean
    is_canceled?: boolean
    doctor_id?: boolean
    patient_id?: boolean
    clinic_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    perscriptions?: boolean | Appointement$perscriptionsArgs<ExtArgs>
    invoice?: boolean | Appointement$invoiceArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    _count?: boolean | AppointementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointement"]>

  export type AppointementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    subject?: boolean
    description?: boolean
    is_canceled?: boolean
    doctor_id?: boolean
    patient_id?: boolean
    clinic_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointement"]>

  export type AppointementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    subject?: boolean
    description?: boolean
    is_canceled?: boolean
    doctor_id?: boolean
    patient_id?: boolean
    clinic_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointement"]>

  export type AppointementSelectScalar = {
    id?: boolean
    date?: boolean
    subject?: boolean
    description?: boolean
    is_canceled?: boolean
    doctor_id?: boolean
    patient_id?: boolean
    clinic_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AppointementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "subject" | "description" | "is_canceled" | "doctor_id" | "patient_id" | "clinic_id" | "created_at" | "updated_at", ExtArgs["result"]["appointement"]>
  export type AppointementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perscriptions?: boolean | Appointement$perscriptionsArgs<ExtArgs>
    invoice?: boolean | Appointement$invoiceArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    _count?: boolean | AppointementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }
  export type AppointementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }

  export type $AppointementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointement"
    objects: {
      perscriptions: Prisma.$PerscriptionPayload<ExtArgs>[]
      invoice: Prisma.$InvoicePayload<ExtArgs> | null
      doctor: Prisma.$UserPayload<ExtArgs>
      patient: Prisma.$UserPayload<ExtArgs>
      clinic: Prisma.$ClinicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      subject: string
      description: string
      is_canceled: boolean
      doctor_id: number
      patient_id: number
      clinic_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["appointement"]>
    composites: {}
  }

  type AppointementGetPayload<S extends boolean | null | undefined | AppointementDefaultArgs> = $Result.GetResult<Prisma.$AppointementPayload, S>

  type AppointementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointementCountAggregateInputType | true
    }

  export interface AppointementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointement'], meta: { name: 'Appointement' } }
    /**
     * Find zero or one Appointement that matches the filter.
     * @param {AppointementFindUniqueArgs} args - Arguments to find a Appointement
     * @example
     * // Get one Appointement
     * const appointement = await prisma.appointement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointementFindUniqueArgs>(args: SelectSubset<T, AppointementFindUniqueArgs<ExtArgs>>): Prisma__AppointementClient<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointementFindUniqueOrThrowArgs} args - Arguments to find a Appointement
     * @example
     * // Get one Appointement
     * const appointement = await prisma.appointement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointementFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointementClient<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointementFindFirstArgs} args - Arguments to find a Appointement
     * @example
     * // Get one Appointement
     * const appointement = await prisma.appointement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointementFindFirstArgs>(args?: SelectSubset<T, AppointementFindFirstArgs<ExtArgs>>): Prisma__AppointementClient<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointementFindFirstOrThrowArgs} args - Arguments to find a Appointement
     * @example
     * // Get one Appointement
     * const appointement = await prisma.appointement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointementFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointementClient<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointements
     * const appointements = await prisma.appointement.findMany()
     * 
     * // Get first 10 Appointements
     * const appointements = await prisma.appointement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointementWithIdOnly = await prisma.appointement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointementFindManyArgs>(args?: SelectSubset<T, AppointementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointement.
     * @param {AppointementCreateArgs} args - Arguments to create a Appointement.
     * @example
     * // Create one Appointement
     * const Appointement = await prisma.appointement.create({
     *   data: {
     *     // ... data to create a Appointement
     *   }
     * })
     * 
     */
    create<T extends AppointementCreateArgs>(args: SelectSubset<T, AppointementCreateArgs<ExtArgs>>): Prisma__AppointementClient<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointements.
     * @param {AppointementCreateManyArgs} args - Arguments to create many Appointements.
     * @example
     * // Create many Appointements
     * const appointement = await prisma.appointement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointementCreateManyArgs>(args?: SelectSubset<T, AppointementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointements and returns the data saved in the database.
     * @param {AppointementCreateManyAndReturnArgs} args - Arguments to create many Appointements.
     * @example
     * // Create many Appointements
     * const appointement = await prisma.appointement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointements and only return the `id`
     * const appointementWithIdOnly = await prisma.appointement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointementCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointement.
     * @param {AppointementDeleteArgs} args - Arguments to delete one Appointement.
     * @example
     * // Delete one Appointement
     * const Appointement = await prisma.appointement.delete({
     *   where: {
     *     // ... filter to delete one Appointement
     *   }
     * })
     * 
     */
    delete<T extends AppointementDeleteArgs>(args: SelectSubset<T, AppointementDeleteArgs<ExtArgs>>): Prisma__AppointementClient<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointement.
     * @param {AppointementUpdateArgs} args - Arguments to update one Appointement.
     * @example
     * // Update one Appointement
     * const appointement = await prisma.appointement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointementUpdateArgs>(args: SelectSubset<T, AppointementUpdateArgs<ExtArgs>>): Prisma__AppointementClient<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointements.
     * @param {AppointementDeleteManyArgs} args - Arguments to filter Appointements to delete.
     * @example
     * // Delete a few Appointements
     * const { count } = await prisma.appointement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointementDeleteManyArgs>(args?: SelectSubset<T, AppointementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointements
     * const appointement = await prisma.appointement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointementUpdateManyArgs>(args: SelectSubset<T, AppointementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointements and returns the data updated in the database.
     * @param {AppointementUpdateManyAndReturnArgs} args - Arguments to update many Appointements.
     * @example
     * // Update many Appointements
     * const appointement = await prisma.appointement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointements and only return the `id`
     * const appointementWithIdOnly = await prisma.appointement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointementUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointement.
     * @param {AppointementUpsertArgs} args - Arguments to update or create a Appointement.
     * @example
     * // Update or create a Appointement
     * const appointement = await prisma.appointement.upsert({
     *   create: {
     *     // ... data to create a Appointement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointement we want to update
     *   }
     * })
     */
    upsert<T extends AppointementUpsertArgs>(args: SelectSubset<T, AppointementUpsertArgs<ExtArgs>>): Prisma__AppointementClient<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointementCountArgs} args - Arguments to filter Appointements to count.
     * @example
     * // Count the number of Appointements
     * const count = await prisma.appointement.count({
     *   where: {
     *     // ... the filter for the Appointements we want to count
     *   }
     * })
    **/
    count<T extends AppointementCountArgs>(
      args?: Subset<T, AppointementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointementAggregateArgs>(args: Subset<T, AppointementAggregateArgs>): Prisma.PrismaPromise<GetAppointementAggregateType<T>>

    /**
     * Group by Appointement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointementGroupByArgs['orderBy'] }
        : { orderBy?: AppointementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointement model
   */
  readonly fields: AppointementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perscriptions<T extends Appointement$perscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Appointement$perscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoice<T extends Appointement$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, Appointement$invoiceArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clinic<T extends ClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicDefaultArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointement model
   */
  interface AppointementFieldRefs {
    readonly id: FieldRef<"Appointement", 'Int'>
    readonly date: FieldRef<"Appointement", 'DateTime'>
    readonly subject: FieldRef<"Appointement", 'String'>
    readonly description: FieldRef<"Appointement", 'String'>
    readonly is_canceled: FieldRef<"Appointement", 'Boolean'>
    readonly doctor_id: FieldRef<"Appointement", 'Int'>
    readonly patient_id: FieldRef<"Appointement", 'Int'>
    readonly clinic_id: FieldRef<"Appointement", 'Int'>
    readonly created_at: FieldRef<"Appointement", 'DateTime'>
    readonly updated_at: FieldRef<"Appointement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointement findUnique
   */
  export type AppointementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    /**
     * Filter, which Appointement to fetch.
     */
    where: AppointementWhereUniqueInput
  }

  /**
   * Appointement findUniqueOrThrow
   */
  export type AppointementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    /**
     * Filter, which Appointement to fetch.
     */
    where: AppointementWhereUniqueInput
  }

  /**
   * Appointement findFirst
   */
  export type AppointementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    /**
     * Filter, which Appointement to fetch.
     */
    where?: AppointementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointements to fetch.
     */
    orderBy?: AppointementOrderByWithRelationInput | AppointementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointements.
     */
    cursor?: AppointementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointements.
     */
    distinct?: AppointementScalarFieldEnum | AppointementScalarFieldEnum[]
  }

  /**
   * Appointement findFirstOrThrow
   */
  export type AppointementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    /**
     * Filter, which Appointement to fetch.
     */
    where?: AppointementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointements to fetch.
     */
    orderBy?: AppointementOrderByWithRelationInput | AppointementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointements.
     */
    cursor?: AppointementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointements.
     */
    distinct?: AppointementScalarFieldEnum | AppointementScalarFieldEnum[]
  }

  /**
   * Appointement findMany
   */
  export type AppointementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    /**
     * Filter, which Appointements to fetch.
     */
    where?: AppointementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointements to fetch.
     */
    orderBy?: AppointementOrderByWithRelationInput | AppointementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointements.
     */
    cursor?: AppointementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointements.
     */
    skip?: number
    distinct?: AppointementScalarFieldEnum | AppointementScalarFieldEnum[]
  }

  /**
   * Appointement create
   */
  export type AppointementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointement.
     */
    data: XOR<AppointementCreateInput, AppointementUncheckedCreateInput>
  }

  /**
   * Appointement createMany
   */
  export type AppointementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointements.
     */
    data: AppointementCreateManyInput | AppointementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointement createManyAndReturn
   */
  export type AppointementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * The data used to create many Appointements.
     */
    data: AppointementCreateManyInput | AppointementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointement update
   */
  export type AppointementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointement.
     */
    data: XOR<AppointementUpdateInput, AppointementUncheckedUpdateInput>
    /**
     * Choose, which Appointement to update.
     */
    where: AppointementWhereUniqueInput
  }

  /**
   * Appointement updateMany
   */
  export type AppointementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointements.
     */
    data: XOR<AppointementUpdateManyMutationInput, AppointementUncheckedUpdateManyInput>
    /**
     * Filter which Appointements to update
     */
    where?: AppointementWhereInput
    /**
     * Limit how many Appointements to update.
     */
    limit?: number
  }

  /**
   * Appointement updateManyAndReturn
   */
  export type AppointementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * The data used to update Appointements.
     */
    data: XOR<AppointementUpdateManyMutationInput, AppointementUncheckedUpdateManyInput>
    /**
     * Filter which Appointements to update
     */
    where?: AppointementWhereInput
    /**
     * Limit how many Appointements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointement upsert
   */
  export type AppointementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointement to update in case it exists.
     */
    where: AppointementWhereUniqueInput
    /**
     * In case the Appointement found by the `where` argument doesn't exist, create a new Appointement with this data.
     */
    create: XOR<AppointementCreateInput, AppointementUncheckedCreateInput>
    /**
     * In case the Appointement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointementUpdateInput, AppointementUncheckedUpdateInput>
  }

  /**
   * Appointement delete
   */
  export type AppointementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    /**
     * Filter which Appointement to delete.
     */
    where: AppointementWhereUniqueInput
  }

  /**
   * Appointement deleteMany
   */
  export type AppointementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointements to delete
     */
    where?: AppointementWhereInput
    /**
     * Limit how many Appointements to delete.
     */
    limit?: number
  }

  /**
   * Appointement.perscriptions
   */
  export type Appointement$perscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionInclude<ExtArgs> | null
    where?: PerscriptionWhereInput
    orderBy?: PerscriptionOrderByWithRelationInput | PerscriptionOrderByWithRelationInput[]
    cursor?: PerscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerscriptionScalarFieldEnum | PerscriptionScalarFieldEnum[]
  }

  /**
   * Appointement.invoice
   */
  export type Appointement$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
  }

  /**
   * Appointement without action
   */
  export type AppointementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
  }


  /**
   * Model Clinic
   */

  export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null
    _avg: ClinicAvgAggregateOutputType | null
    _sum: ClinicSumAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  export type ClinicAvgAggregateOutputType = {
    id: number | null
    rooms_number: number | null
    receptionist_id: number | null
  }

  export type ClinicSumAggregateOutputType = {
    id: number | null
    rooms_number: number | null
    receptionist_id: number | null
  }

  export type ClinicMinAggregateOutputType = {
    id: number | null
    name: string | null
    rooms_number: number | null
    receptionist_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClinicMaxAggregateOutputType = {
    id: number | null
    name: string | null
    rooms_number: number | null
    receptionist_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClinicCountAggregateOutputType = {
    id: number
    name: number
    rooms_number: number
    receptionist_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClinicAvgAggregateInputType = {
    id?: true
    rooms_number?: true
    receptionist_id?: true
  }

  export type ClinicSumAggregateInputType = {
    id?: true
    rooms_number?: true
    receptionist_id?: true
  }

  export type ClinicMinAggregateInputType = {
    id?: true
    name?: true
    rooms_number?: true
    receptionist_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ClinicMaxAggregateInputType = {
    id?: true
    name?: true
    rooms_number?: true
    receptionist_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ClinicCountAggregateInputType = {
    id?: true
    name?: true
    rooms_number?: true
    receptionist_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClinicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinic to aggregate.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clinics
    **/
    _count?: true | ClinicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClinicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClinicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicMaxAggregateInputType
  }

  export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
        [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic[P]>
      : GetScalarType<T[P], AggregateClinic[P]>
  }




  export type ClinicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicWhereInput
    orderBy?: ClinicOrderByWithAggregationInput | ClinicOrderByWithAggregationInput[]
    by: ClinicScalarFieldEnum[] | ClinicScalarFieldEnum
    having?: ClinicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicCountAggregateInputType | true
    _avg?: ClinicAvgAggregateInputType
    _sum?: ClinicSumAggregateInputType
    _min?: ClinicMinAggregateInputType
    _max?: ClinicMaxAggregateInputType
  }

  export type ClinicGroupByOutputType = {
    id: number
    name: string
    rooms_number: number
    receptionist_id: number | null
    created_at: Date
    updated_at: Date
    _count: ClinicCountAggregateOutputType | null
    _avg: ClinicAvgAggregateOutputType | null
    _sum: ClinicSumAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  type GetClinicGroupByPayload<T extends ClinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicGroupByOutputType[P]>
        }
      >
    >


  export type ClinicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rooms_number?: boolean
    receptionist_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    services?: boolean | Clinic$servicesArgs<ExtArgs>
    appointements?: boolean | Clinic$appointementsArgs<ExtArgs>
    users?: boolean | Clinic$usersArgs<ExtArgs>
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rooms_number?: boolean
    receptionist_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rooms_number?: boolean
    receptionist_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectScalar = {
    id?: boolean
    name?: boolean
    rooms_number?: boolean
    receptionist_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClinicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rooms_number" | "receptionist_id" | "created_at" | "updated_at", ExtArgs["result"]["clinic"]>
  export type ClinicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Clinic$servicesArgs<ExtArgs>
    appointements?: boolean | Clinic$appointementsArgs<ExtArgs>
    users?: boolean | Clinic$usersArgs<ExtArgs>
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClinicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClinicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClinicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clinic"
    objects: {
      services: Prisma.$ClinicServicesPayload<ExtArgs>[]
      appointements: Prisma.$AppointementPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      rooms_number: number
      receptionist_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["clinic"]>
    composites: {}
  }

  type ClinicGetPayload<S extends boolean | null | undefined | ClinicDefaultArgs> = $Result.GetResult<Prisma.$ClinicPayload, S>

  type ClinicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClinicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicCountAggregateInputType | true
    }

  export interface ClinicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clinic'], meta: { name: 'Clinic' } }
    /**
     * Find zero or one Clinic that matches the filter.
     * @param {ClinicFindUniqueArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicFindUniqueArgs>(args: SelectSubset<T, ClinicFindUniqueArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clinic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClinicFindUniqueOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicFindFirstArgs>(args?: SelectSubset<T, ClinicFindFirstArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinic.findMany()
     * 
     * // Get first 10 Clinics
     * const clinics = await prisma.clinic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicWithIdOnly = await prisma.clinic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicFindManyArgs>(args?: SelectSubset<T, ClinicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clinic.
     * @param {ClinicCreateArgs} args - Arguments to create a Clinic.
     * @example
     * // Create one Clinic
     * const Clinic = await prisma.clinic.create({
     *   data: {
     *     // ... data to create a Clinic
     *   }
     * })
     * 
     */
    create<T extends ClinicCreateArgs>(args: SelectSubset<T, ClinicCreateArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clinics.
     * @param {ClinicCreateManyArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinic = await prisma.clinic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicCreateManyArgs>(args?: SelectSubset<T, ClinicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clinics and returns the data saved in the database.
     * @param {ClinicCreateManyAndReturnArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinic = await prisma.clinic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clinics and only return the `id`
     * const clinicWithIdOnly = await prisma.clinic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clinic.
     * @param {ClinicDeleteArgs} args - Arguments to delete one Clinic.
     * @example
     * // Delete one Clinic
     * const Clinic = await prisma.clinic.delete({
     *   where: {
     *     // ... filter to delete one Clinic
     *   }
     * })
     * 
     */
    delete<T extends ClinicDeleteArgs>(args: SelectSubset<T, ClinicDeleteArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clinic.
     * @param {ClinicUpdateArgs} args - Arguments to update one Clinic.
     * @example
     * // Update one Clinic
     * const clinic = await prisma.clinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicUpdateArgs>(args: SelectSubset<T, ClinicUpdateArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clinics.
     * @param {ClinicDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicDeleteManyArgs>(args?: SelectSubset<T, ClinicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicUpdateManyArgs>(args: SelectSubset<T, ClinicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics and returns the data updated in the database.
     * @param {ClinicUpdateManyAndReturnArgs} args - Arguments to update many Clinics.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clinics and only return the `id`
     * const clinicWithIdOnly = await prisma.clinic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClinicUpdateManyAndReturnArgs>(args: SelectSubset<T, ClinicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clinic.
     * @param {ClinicUpsertArgs} args - Arguments to update or create a Clinic.
     * @example
     * // Update or create a Clinic
     * const clinic = await prisma.clinic.upsert({
     *   create: {
     *     // ... data to create a Clinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic we want to update
     *   }
     * })
     */
    upsert<T extends ClinicUpsertArgs>(args: SelectSubset<T, ClinicUpsertArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinic.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
    **/
    count<T extends ClinicCountArgs>(
      args?: Subset<T, ClinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClinicAggregateArgs>(args: Subset<T, ClinicAggregateArgs>): Prisma.PrismaPromise<GetClinicAggregateType<T>>

    /**
     * Group by Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClinicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicGroupByArgs['orderBy'] }
        : { orderBy?: ClinicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClinicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clinic model
   */
  readonly fields: ClinicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Clinic$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointements<T extends Clinic$appointementsArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$appointementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Clinic$usersArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clinic model
   */
  interface ClinicFieldRefs {
    readonly id: FieldRef<"Clinic", 'Int'>
    readonly name: FieldRef<"Clinic", 'String'>
    readonly rooms_number: FieldRef<"Clinic", 'Int'>
    readonly receptionist_id: FieldRef<"Clinic", 'Int'>
    readonly created_at: FieldRef<"Clinic", 'DateTime'>
    readonly updated_at: FieldRef<"Clinic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clinic findUnique
   */
  export type ClinicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic findUniqueOrThrow
   */
  export type ClinicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic findFirst
   */
  export type ClinicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic findFirstOrThrow
   */
  export type ClinicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic findMany
   */
  export type ClinicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinics to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic create
   */
  export type ClinicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The data needed to create a Clinic.
     */
    data: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
  }

  /**
   * Clinic createMany
   */
  export type ClinicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clinics.
     */
    data: ClinicCreateManyInput | ClinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinic createManyAndReturn
   */
  export type ClinicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * The data used to create many Clinics.
     */
    data: ClinicCreateManyInput | ClinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinic update
   */
  export type ClinicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The data needed to update a Clinic.
     */
    data: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
    /**
     * Choose, which Clinic to update.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic updateMany
   */
  export type ClinicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicUpdateManyMutationInput, ClinicUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to update.
     */
    limit?: number
  }

  /**
   * Clinic updateManyAndReturn
   */
  export type ClinicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicUpdateManyMutationInput, ClinicUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to update.
     */
    limit?: number
  }

  /**
   * Clinic upsert
   */
  export type ClinicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The filter to search for the Clinic to update in case it exists.
     */
    where: ClinicWhereUniqueInput
    /**
     * In case the Clinic found by the `where` argument doesn't exist, create a new Clinic with this data.
     */
    create: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
    /**
     * In case the Clinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
  }

  /**
   * Clinic delete
   */
  export type ClinicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter which Clinic to delete.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic deleteMany
   */
  export type ClinicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinics to delete
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to delete.
     */
    limit?: number
  }

  /**
   * Clinic.services
   */
  export type Clinic$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
    where?: ClinicServicesWhereInput
    orderBy?: ClinicServicesOrderByWithRelationInput | ClinicServicesOrderByWithRelationInput[]
    cursor?: ClinicServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClinicServicesScalarFieldEnum | ClinicServicesScalarFieldEnum[]
  }

  /**
   * Clinic.appointements
   */
  export type Clinic$appointementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    where?: AppointementWhereInput
    orderBy?: AppointementOrderByWithRelationInput | AppointementOrderByWithRelationInput[]
    cursor?: AppointementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointementScalarFieldEnum | AppointementScalarFieldEnum[]
  }

  /**
   * Clinic.users
   */
  export type Clinic$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Clinic without action
   */
  export type ClinicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
  }


  /**
   * Model ClinicServices
   */

  export type AggregateClinicServices = {
    _count: ClinicServicesCountAggregateOutputType | null
    _avg: ClinicServicesAvgAggregateOutputType | null
    _sum: ClinicServicesSumAggregateOutputType | null
    _min: ClinicServicesMinAggregateOutputType | null
    _max: ClinicServicesMaxAggregateOutputType | null
  }

  export type ClinicServicesAvgAggregateOutputType = {
    id: number | null
    clinic_id: number | null
    service_id: number | null
  }

  export type ClinicServicesSumAggregateOutputType = {
    id: number | null
    clinic_id: number | null
    service_id: number | null
  }

  export type ClinicServicesMinAggregateOutputType = {
    id: number | null
    clinic_id: number | null
    service_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClinicServicesMaxAggregateOutputType = {
    id: number | null
    clinic_id: number | null
    service_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClinicServicesCountAggregateOutputType = {
    id: number
    clinic_id: number
    service_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClinicServicesAvgAggregateInputType = {
    id?: true
    clinic_id?: true
    service_id?: true
  }

  export type ClinicServicesSumAggregateInputType = {
    id?: true
    clinic_id?: true
    service_id?: true
  }

  export type ClinicServicesMinAggregateInputType = {
    id?: true
    clinic_id?: true
    service_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ClinicServicesMaxAggregateInputType = {
    id?: true
    clinic_id?: true
    service_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ClinicServicesCountAggregateInputType = {
    id?: true
    clinic_id?: true
    service_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClinicServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClinicServices to aggregate.
     */
    where?: ClinicServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicServices to fetch.
     */
    orderBy?: ClinicServicesOrderByWithRelationInput | ClinicServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClinicServices
    **/
    _count?: true | ClinicServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClinicServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClinicServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicServicesMaxAggregateInputType
  }

  export type GetClinicServicesAggregateType<T extends ClinicServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateClinicServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinicServices[P]>
      : GetScalarType<T[P], AggregateClinicServices[P]>
  }




  export type ClinicServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicServicesWhereInput
    orderBy?: ClinicServicesOrderByWithAggregationInput | ClinicServicesOrderByWithAggregationInput[]
    by: ClinicServicesScalarFieldEnum[] | ClinicServicesScalarFieldEnum
    having?: ClinicServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicServicesCountAggregateInputType | true
    _avg?: ClinicServicesAvgAggregateInputType
    _sum?: ClinicServicesSumAggregateInputType
    _min?: ClinicServicesMinAggregateInputType
    _max?: ClinicServicesMaxAggregateInputType
  }

  export type ClinicServicesGroupByOutputType = {
    id: number
    clinic_id: number
    service_id: number
    created_at: Date
    updated_at: Date
    _count: ClinicServicesCountAggregateOutputType | null
    _avg: ClinicServicesAvgAggregateOutputType | null
    _sum: ClinicServicesSumAggregateOutputType | null
    _min: ClinicServicesMinAggregateOutputType | null
    _max: ClinicServicesMaxAggregateOutputType | null
  }

  type GetClinicServicesGroupByPayload<T extends ClinicServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicServicesGroupByOutputType[P]>
        }
      >
    >


  export type ClinicServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinic_id?: boolean
    service_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinicServices"]>

  export type ClinicServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinic_id?: boolean
    service_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinicServices"]>

  export type ClinicServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinic_id?: boolean
    service_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinicServices"]>

  export type ClinicServicesSelectScalar = {
    id?: boolean
    clinic_id?: boolean
    service_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClinicServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinic_id" | "service_id" | "created_at" | "updated_at", ExtArgs["result"]["clinicServices"]>
  export type ClinicServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ClinicServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ClinicServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ClinicServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClinicServices"
    objects: {
      clinic: Prisma.$ClinicPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clinic_id: number
      service_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["clinicServices"]>
    composites: {}
  }

  type ClinicServicesGetPayload<S extends boolean | null | undefined | ClinicServicesDefaultArgs> = $Result.GetResult<Prisma.$ClinicServicesPayload, S>

  type ClinicServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClinicServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicServicesCountAggregateInputType | true
    }

  export interface ClinicServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClinicServices'], meta: { name: 'ClinicServices' } }
    /**
     * Find zero or one ClinicServices that matches the filter.
     * @param {ClinicServicesFindUniqueArgs} args - Arguments to find a ClinicServices
     * @example
     * // Get one ClinicServices
     * const clinicServices = await prisma.clinicServices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicServicesFindUniqueArgs>(args: SelectSubset<T, ClinicServicesFindUniqueArgs<ExtArgs>>): Prisma__ClinicServicesClient<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClinicServices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClinicServicesFindUniqueOrThrowArgs} args - Arguments to find a ClinicServices
     * @example
     * // Get one ClinicServices
     * const clinicServices = await prisma.clinicServices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicServicesClient<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClinicServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicServicesFindFirstArgs} args - Arguments to find a ClinicServices
     * @example
     * // Get one ClinicServices
     * const clinicServices = await prisma.clinicServices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicServicesFindFirstArgs>(args?: SelectSubset<T, ClinicServicesFindFirstArgs<ExtArgs>>): Prisma__ClinicServicesClient<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClinicServices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicServicesFindFirstOrThrowArgs} args - Arguments to find a ClinicServices
     * @example
     * // Get one ClinicServices
     * const clinicServices = await prisma.clinicServices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicServicesClient<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClinicServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClinicServices
     * const clinicServices = await prisma.clinicServices.findMany()
     * 
     * // Get first 10 ClinicServices
     * const clinicServices = await prisma.clinicServices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicServicesWithIdOnly = await prisma.clinicServices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicServicesFindManyArgs>(args?: SelectSubset<T, ClinicServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClinicServices.
     * @param {ClinicServicesCreateArgs} args - Arguments to create a ClinicServices.
     * @example
     * // Create one ClinicServices
     * const ClinicServices = await prisma.clinicServices.create({
     *   data: {
     *     // ... data to create a ClinicServices
     *   }
     * })
     * 
     */
    create<T extends ClinicServicesCreateArgs>(args: SelectSubset<T, ClinicServicesCreateArgs<ExtArgs>>): Prisma__ClinicServicesClient<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClinicServices.
     * @param {ClinicServicesCreateManyArgs} args - Arguments to create many ClinicServices.
     * @example
     * // Create many ClinicServices
     * const clinicServices = await prisma.clinicServices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicServicesCreateManyArgs>(args?: SelectSubset<T, ClinicServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClinicServices and returns the data saved in the database.
     * @param {ClinicServicesCreateManyAndReturnArgs} args - Arguments to create many ClinicServices.
     * @example
     * // Create many ClinicServices
     * const clinicServices = await prisma.clinicServices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClinicServices and only return the `id`
     * const clinicServicesWithIdOnly = await prisma.clinicServices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicServicesCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicServicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClinicServices.
     * @param {ClinicServicesDeleteArgs} args - Arguments to delete one ClinicServices.
     * @example
     * // Delete one ClinicServices
     * const ClinicServices = await prisma.clinicServices.delete({
     *   where: {
     *     // ... filter to delete one ClinicServices
     *   }
     * })
     * 
     */
    delete<T extends ClinicServicesDeleteArgs>(args: SelectSubset<T, ClinicServicesDeleteArgs<ExtArgs>>): Prisma__ClinicServicesClient<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClinicServices.
     * @param {ClinicServicesUpdateArgs} args - Arguments to update one ClinicServices.
     * @example
     * // Update one ClinicServices
     * const clinicServices = await prisma.clinicServices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicServicesUpdateArgs>(args: SelectSubset<T, ClinicServicesUpdateArgs<ExtArgs>>): Prisma__ClinicServicesClient<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClinicServices.
     * @param {ClinicServicesDeleteManyArgs} args - Arguments to filter ClinicServices to delete.
     * @example
     * // Delete a few ClinicServices
     * const { count } = await prisma.clinicServices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicServicesDeleteManyArgs>(args?: SelectSubset<T, ClinicServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClinicServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClinicServices
     * const clinicServices = await prisma.clinicServices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicServicesUpdateManyArgs>(args: SelectSubset<T, ClinicServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClinicServices and returns the data updated in the database.
     * @param {ClinicServicesUpdateManyAndReturnArgs} args - Arguments to update many ClinicServices.
     * @example
     * // Update many ClinicServices
     * const clinicServices = await prisma.clinicServices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClinicServices and only return the `id`
     * const clinicServicesWithIdOnly = await prisma.clinicServices.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClinicServicesUpdateManyAndReturnArgs>(args: SelectSubset<T, ClinicServicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClinicServices.
     * @param {ClinicServicesUpsertArgs} args - Arguments to update or create a ClinicServices.
     * @example
     * // Update or create a ClinicServices
     * const clinicServices = await prisma.clinicServices.upsert({
     *   create: {
     *     // ... data to create a ClinicServices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClinicServices we want to update
     *   }
     * })
     */
    upsert<T extends ClinicServicesUpsertArgs>(args: SelectSubset<T, ClinicServicesUpsertArgs<ExtArgs>>): Prisma__ClinicServicesClient<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClinicServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicServicesCountArgs} args - Arguments to filter ClinicServices to count.
     * @example
     * // Count the number of ClinicServices
     * const count = await prisma.clinicServices.count({
     *   where: {
     *     // ... the filter for the ClinicServices we want to count
     *   }
     * })
    **/
    count<T extends ClinicServicesCountArgs>(
      args?: Subset<T, ClinicServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClinicServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClinicServicesAggregateArgs>(args: Subset<T, ClinicServicesAggregateArgs>): Prisma.PrismaPromise<GetClinicServicesAggregateType<T>>

    /**
     * Group by ClinicServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicServicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClinicServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicServicesGroupByArgs['orderBy'] }
        : { orderBy?: ClinicServicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClinicServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClinicServices model
   */
  readonly fields: ClinicServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClinicServices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends ClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicDefaultArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClinicServices model
   */
  interface ClinicServicesFieldRefs {
    readonly id: FieldRef<"ClinicServices", 'Int'>
    readonly clinic_id: FieldRef<"ClinicServices", 'Int'>
    readonly service_id: FieldRef<"ClinicServices", 'Int'>
    readonly created_at: FieldRef<"ClinicServices", 'DateTime'>
    readonly updated_at: FieldRef<"ClinicServices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClinicServices findUnique
   */
  export type ClinicServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
    /**
     * Filter, which ClinicServices to fetch.
     */
    where: ClinicServicesWhereUniqueInput
  }

  /**
   * ClinicServices findUniqueOrThrow
   */
  export type ClinicServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
    /**
     * Filter, which ClinicServices to fetch.
     */
    where: ClinicServicesWhereUniqueInput
  }

  /**
   * ClinicServices findFirst
   */
  export type ClinicServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
    /**
     * Filter, which ClinicServices to fetch.
     */
    where?: ClinicServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicServices to fetch.
     */
    orderBy?: ClinicServicesOrderByWithRelationInput | ClinicServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClinicServices.
     */
    cursor?: ClinicServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClinicServices.
     */
    distinct?: ClinicServicesScalarFieldEnum | ClinicServicesScalarFieldEnum[]
  }

  /**
   * ClinicServices findFirstOrThrow
   */
  export type ClinicServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
    /**
     * Filter, which ClinicServices to fetch.
     */
    where?: ClinicServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicServices to fetch.
     */
    orderBy?: ClinicServicesOrderByWithRelationInput | ClinicServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClinicServices.
     */
    cursor?: ClinicServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClinicServices.
     */
    distinct?: ClinicServicesScalarFieldEnum | ClinicServicesScalarFieldEnum[]
  }

  /**
   * ClinicServices findMany
   */
  export type ClinicServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
    /**
     * Filter, which ClinicServices to fetch.
     */
    where?: ClinicServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicServices to fetch.
     */
    orderBy?: ClinicServicesOrderByWithRelationInput | ClinicServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClinicServices.
     */
    cursor?: ClinicServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicServices.
     */
    skip?: number
    distinct?: ClinicServicesScalarFieldEnum | ClinicServicesScalarFieldEnum[]
  }

  /**
   * ClinicServices create
   */
  export type ClinicServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
    /**
     * The data needed to create a ClinicServices.
     */
    data: XOR<ClinicServicesCreateInput, ClinicServicesUncheckedCreateInput>
  }

  /**
   * ClinicServices createMany
   */
  export type ClinicServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClinicServices.
     */
    data: ClinicServicesCreateManyInput | ClinicServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClinicServices createManyAndReturn
   */
  export type ClinicServicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * The data used to create many ClinicServices.
     */
    data: ClinicServicesCreateManyInput | ClinicServicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClinicServices update
   */
  export type ClinicServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
    /**
     * The data needed to update a ClinicServices.
     */
    data: XOR<ClinicServicesUpdateInput, ClinicServicesUncheckedUpdateInput>
    /**
     * Choose, which ClinicServices to update.
     */
    where: ClinicServicesWhereUniqueInput
  }

  /**
   * ClinicServices updateMany
   */
  export type ClinicServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClinicServices.
     */
    data: XOR<ClinicServicesUpdateManyMutationInput, ClinicServicesUncheckedUpdateManyInput>
    /**
     * Filter which ClinicServices to update
     */
    where?: ClinicServicesWhereInput
    /**
     * Limit how many ClinicServices to update.
     */
    limit?: number
  }

  /**
   * ClinicServices updateManyAndReturn
   */
  export type ClinicServicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * The data used to update ClinicServices.
     */
    data: XOR<ClinicServicesUpdateManyMutationInput, ClinicServicesUncheckedUpdateManyInput>
    /**
     * Filter which ClinicServices to update
     */
    where?: ClinicServicesWhereInput
    /**
     * Limit how many ClinicServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClinicServices upsert
   */
  export type ClinicServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
    /**
     * The filter to search for the ClinicServices to update in case it exists.
     */
    where: ClinicServicesWhereUniqueInput
    /**
     * In case the ClinicServices found by the `where` argument doesn't exist, create a new ClinicServices with this data.
     */
    create: XOR<ClinicServicesCreateInput, ClinicServicesUncheckedCreateInput>
    /**
     * In case the ClinicServices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicServicesUpdateInput, ClinicServicesUncheckedUpdateInput>
  }

  /**
   * ClinicServices delete
   */
  export type ClinicServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
    /**
     * Filter which ClinicServices to delete.
     */
    where: ClinicServicesWhereUniqueInput
  }

  /**
   * ClinicServices deleteMany
   */
  export type ClinicServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClinicServices to delete
     */
    where?: ClinicServicesWhereInput
    /**
     * Limit how many ClinicServices to delete.
     */
    limit?: number
  }

  /**
   * ClinicServices without action
   */
  export type ClinicServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
    appointement_id: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
    appointement_id: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
    text: string | null
    appointement_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
    text: string | null
    appointement_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    price: number
    discount: number
    text: number
    appointement_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    appointement_id?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    appointement_id?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    text?: true
    appointement_id?: true
    created_at?: true
    updated_at?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    text?: true
    appointement_id?: true
    created_at?: true
    updated_at?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    text?: true
    appointement_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: number
    price: number
    discount: number
    text: string
    appointement_id: number
    created_at: Date
    updated_at: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    discount?: boolean
    text?: boolean
    appointement_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    appointment?: boolean | AppointementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    discount?: boolean
    text?: boolean
    appointement_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    appointment?: boolean | AppointementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    discount?: boolean
    text?: boolean
    appointement_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    appointment?: boolean | AppointementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    price?: boolean
    discount?: boolean
    text?: boolean
    appointement_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "discount" | "text" | "appointement_id" | "created_at" | "updated_at", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointementDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointementDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointementDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      appointment: Prisma.$AppointementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: number
      discount: number
      text: string
      appointement_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointementDefaultArgs<ExtArgs>>): Prisma__AppointementClient<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'Int'>
    readonly price: FieldRef<"Invoice", 'Int'>
    readonly discount: FieldRef<"Invoice", 'Int'>
    readonly text: FieldRef<"Invoice", 'String'>
    readonly appointement_id: FieldRef<"Invoice", 'Int'>
    readonly created_at: FieldRef<"Invoice", 'DateTime'>
    readonly updated_at: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Perscription
   */

  export type AggregatePerscription = {
    _count: PerscriptionCountAggregateOutputType | null
    _avg: PerscriptionAvgAggregateOutputType | null
    _sum: PerscriptionSumAggregateOutputType | null
    _min: PerscriptionMinAggregateOutputType | null
    _max: PerscriptionMaxAggregateOutputType | null
  }

  export type PerscriptionAvgAggregateOutputType = {
    id: number | null
    appointement_id: number | null
  }

  export type PerscriptionSumAggregateOutputType = {
    id: number | null
    appointement_id: number | null
  }

  export type PerscriptionMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    appointement_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PerscriptionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    appointement_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PerscriptionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    appointement_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PerscriptionAvgAggregateInputType = {
    id?: true
    appointement_id?: true
  }

  export type PerscriptionSumAggregateInputType = {
    id?: true
    appointement_id?: true
  }

  export type PerscriptionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    appointement_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PerscriptionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    appointement_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PerscriptionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    appointement_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PerscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perscription to aggregate.
     */
    where?: PerscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perscriptions to fetch.
     */
    orderBy?: PerscriptionOrderByWithRelationInput | PerscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perscriptions
    **/
    _count?: true | PerscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerscriptionMaxAggregateInputType
  }

  export type GetPerscriptionAggregateType<T extends PerscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePerscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerscription[P]>
      : GetScalarType<T[P], AggregatePerscription[P]>
  }




  export type PerscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerscriptionWhereInput
    orderBy?: PerscriptionOrderByWithAggregationInput | PerscriptionOrderByWithAggregationInput[]
    by: PerscriptionScalarFieldEnum[] | PerscriptionScalarFieldEnum
    having?: PerscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerscriptionCountAggregateInputType | true
    _avg?: PerscriptionAvgAggregateInputType
    _sum?: PerscriptionSumAggregateInputType
    _min?: PerscriptionMinAggregateInputType
    _max?: PerscriptionMaxAggregateInputType
  }

  export type PerscriptionGroupByOutputType = {
    id: number
    title: string
    description: string
    appointement_id: number
    created_at: Date
    updated_at: Date
    _count: PerscriptionCountAggregateOutputType | null
    _avg: PerscriptionAvgAggregateOutputType | null
    _sum: PerscriptionSumAggregateOutputType | null
    _min: PerscriptionMinAggregateOutputType | null
    _max: PerscriptionMaxAggregateOutputType | null
  }

  type GetPerscriptionGroupByPayload<T extends PerscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PerscriptionGroupByOutputType[P]>
        }
      >
    >


  export type PerscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    appointement_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    appointement?: boolean | AppointementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perscription"]>

  export type PerscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    appointement_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    appointement?: boolean | AppointementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perscription"]>

  export type PerscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    appointement_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    appointement?: boolean | AppointementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perscription"]>

  export type PerscriptionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    appointement_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PerscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "appointement_id" | "created_at" | "updated_at", ExtArgs["result"]["perscription"]>
  export type PerscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointement?: boolean | AppointementDefaultArgs<ExtArgs>
  }
  export type PerscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointement?: boolean | AppointementDefaultArgs<ExtArgs>
  }
  export type PerscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointement?: boolean | AppointementDefaultArgs<ExtArgs>
  }

  export type $PerscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perscription"
    objects: {
      appointement: Prisma.$AppointementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      appointement_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["perscription"]>
    composites: {}
  }

  type PerscriptionGetPayload<S extends boolean | null | undefined | PerscriptionDefaultArgs> = $Result.GetResult<Prisma.$PerscriptionPayload, S>

  type PerscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerscriptionCountAggregateInputType | true
    }

  export interface PerscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perscription'], meta: { name: 'Perscription' } }
    /**
     * Find zero or one Perscription that matches the filter.
     * @param {PerscriptionFindUniqueArgs} args - Arguments to find a Perscription
     * @example
     * // Get one Perscription
     * const perscription = await prisma.perscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerscriptionFindUniqueArgs>(args: SelectSubset<T, PerscriptionFindUniqueArgs<ExtArgs>>): Prisma__PerscriptionClient<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerscriptionFindUniqueOrThrowArgs} args - Arguments to find a Perscription
     * @example
     * // Get one Perscription
     * const perscription = await prisma.perscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PerscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerscriptionClient<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerscriptionFindFirstArgs} args - Arguments to find a Perscription
     * @example
     * // Get one Perscription
     * const perscription = await prisma.perscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerscriptionFindFirstArgs>(args?: SelectSubset<T, PerscriptionFindFirstArgs<ExtArgs>>): Prisma__PerscriptionClient<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerscriptionFindFirstOrThrowArgs} args - Arguments to find a Perscription
     * @example
     * // Get one Perscription
     * const perscription = await prisma.perscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PerscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerscriptionClient<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perscriptions
     * const perscriptions = await prisma.perscription.findMany()
     * 
     * // Get first 10 Perscriptions
     * const perscriptions = await prisma.perscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perscriptionWithIdOnly = await prisma.perscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerscriptionFindManyArgs>(args?: SelectSubset<T, PerscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perscription.
     * @param {PerscriptionCreateArgs} args - Arguments to create a Perscription.
     * @example
     * // Create one Perscription
     * const Perscription = await prisma.perscription.create({
     *   data: {
     *     // ... data to create a Perscription
     *   }
     * })
     * 
     */
    create<T extends PerscriptionCreateArgs>(args: SelectSubset<T, PerscriptionCreateArgs<ExtArgs>>): Prisma__PerscriptionClient<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perscriptions.
     * @param {PerscriptionCreateManyArgs} args - Arguments to create many Perscriptions.
     * @example
     * // Create many Perscriptions
     * const perscription = await prisma.perscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerscriptionCreateManyArgs>(args?: SelectSubset<T, PerscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perscriptions and returns the data saved in the database.
     * @param {PerscriptionCreateManyAndReturnArgs} args - Arguments to create many Perscriptions.
     * @example
     * // Create many Perscriptions
     * const perscription = await prisma.perscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perscriptions and only return the `id`
     * const perscriptionWithIdOnly = await prisma.perscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PerscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Perscription.
     * @param {PerscriptionDeleteArgs} args - Arguments to delete one Perscription.
     * @example
     * // Delete one Perscription
     * const Perscription = await prisma.perscription.delete({
     *   where: {
     *     // ... filter to delete one Perscription
     *   }
     * })
     * 
     */
    delete<T extends PerscriptionDeleteArgs>(args: SelectSubset<T, PerscriptionDeleteArgs<ExtArgs>>): Prisma__PerscriptionClient<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perscription.
     * @param {PerscriptionUpdateArgs} args - Arguments to update one Perscription.
     * @example
     * // Update one Perscription
     * const perscription = await prisma.perscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerscriptionUpdateArgs>(args: SelectSubset<T, PerscriptionUpdateArgs<ExtArgs>>): Prisma__PerscriptionClient<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perscriptions.
     * @param {PerscriptionDeleteManyArgs} args - Arguments to filter Perscriptions to delete.
     * @example
     * // Delete a few Perscriptions
     * const { count } = await prisma.perscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerscriptionDeleteManyArgs>(args?: SelectSubset<T, PerscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perscriptions
     * const perscription = await prisma.perscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerscriptionUpdateManyArgs>(args: SelectSubset<T, PerscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perscriptions and returns the data updated in the database.
     * @param {PerscriptionUpdateManyAndReturnArgs} args - Arguments to update many Perscriptions.
     * @example
     * // Update many Perscriptions
     * const perscription = await prisma.perscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perscriptions and only return the `id`
     * const perscriptionWithIdOnly = await prisma.perscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PerscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PerscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Perscription.
     * @param {PerscriptionUpsertArgs} args - Arguments to update or create a Perscription.
     * @example
     * // Update or create a Perscription
     * const perscription = await prisma.perscription.upsert({
     *   create: {
     *     // ... data to create a Perscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perscription we want to update
     *   }
     * })
     */
    upsert<T extends PerscriptionUpsertArgs>(args: SelectSubset<T, PerscriptionUpsertArgs<ExtArgs>>): Prisma__PerscriptionClient<$Result.GetResult<Prisma.$PerscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerscriptionCountArgs} args - Arguments to filter Perscriptions to count.
     * @example
     * // Count the number of Perscriptions
     * const count = await prisma.perscription.count({
     *   where: {
     *     // ... the filter for the Perscriptions we want to count
     *   }
     * })
    **/
    count<T extends PerscriptionCountArgs>(
      args?: Subset<T, PerscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerscriptionAggregateArgs>(args: Subset<T, PerscriptionAggregateArgs>): Prisma.PrismaPromise<GetPerscriptionAggregateType<T>>

    /**
     * Group by Perscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerscriptionGroupByArgs['orderBy'] }
        : { orderBy?: PerscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perscription model
   */
  readonly fields: PerscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointement<T extends AppointementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointementDefaultArgs<ExtArgs>>): Prisma__AppointementClient<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Perscription model
   */
  interface PerscriptionFieldRefs {
    readonly id: FieldRef<"Perscription", 'Int'>
    readonly title: FieldRef<"Perscription", 'String'>
    readonly description: FieldRef<"Perscription", 'String'>
    readonly appointement_id: FieldRef<"Perscription", 'Int'>
    readonly created_at: FieldRef<"Perscription", 'DateTime'>
    readonly updated_at: FieldRef<"Perscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Perscription findUnique
   */
  export type PerscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Perscription to fetch.
     */
    where: PerscriptionWhereUniqueInput
  }

  /**
   * Perscription findUniqueOrThrow
   */
  export type PerscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Perscription to fetch.
     */
    where: PerscriptionWhereUniqueInput
  }

  /**
   * Perscription findFirst
   */
  export type PerscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Perscription to fetch.
     */
    where?: PerscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perscriptions to fetch.
     */
    orderBy?: PerscriptionOrderByWithRelationInput | PerscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perscriptions.
     */
    cursor?: PerscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perscriptions.
     */
    distinct?: PerscriptionScalarFieldEnum | PerscriptionScalarFieldEnum[]
  }

  /**
   * Perscription findFirstOrThrow
   */
  export type PerscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Perscription to fetch.
     */
    where?: PerscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perscriptions to fetch.
     */
    orderBy?: PerscriptionOrderByWithRelationInput | PerscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perscriptions.
     */
    cursor?: PerscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perscriptions.
     */
    distinct?: PerscriptionScalarFieldEnum | PerscriptionScalarFieldEnum[]
  }

  /**
   * Perscription findMany
   */
  export type PerscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Perscriptions to fetch.
     */
    where?: PerscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perscriptions to fetch.
     */
    orderBy?: PerscriptionOrderByWithRelationInput | PerscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perscriptions.
     */
    cursor?: PerscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perscriptions.
     */
    skip?: number
    distinct?: PerscriptionScalarFieldEnum | PerscriptionScalarFieldEnum[]
  }

  /**
   * Perscription create
   */
  export type PerscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Perscription.
     */
    data: XOR<PerscriptionCreateInput, PerscriptionUncheckedCreateInput>
  }

  /**
   * Perscription createMany
   */
  export type PerscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perscriptions.
     */
    data: PerscriptionCreateManyInput | PerscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perscription createManyAndReturn
   */
  export type PerscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Perscriptions.
     */
    data: PerscriptionCreateManyInput | PerscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perscription update
   */
  export type PerscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Perscription.
     */
    data: XOR<PerscriptionUpdateInput, PerscriptionUncheckedUpdateInput>
    /**
     * Choose, which Perscription to update.
     */
    where: PerscriptionWhereUniqueInput
  }

  /**
   * Perscription updateMany
   */
  export type PerscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perscriptions.
     */
    data: XOR<PerscriptionUpdateManyMutationInput, PerscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Perscriptions to update
     */
    where?: PerscriptionWhereInput
    /**
     * Limit how many Perscriptions to update.
     */
    limit?: number
  }

  /**
   * Perscription updateManyAndReturn
   */
  export type PerscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Perscriptions.
     */
    data: XOR<PerscriptionUpdateManyMutationInput, PerscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Perscriptions to update
     */
    where?: PerscriptionWhereInput
    /**
     * Limit how many Perscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perscription upsert
   */
  export type PerscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Perscription to update in case it exists.
     */
    where: PerscriptionWhereUniqueInput
    /**
     * In case the Perscription found by the `where` argument doesn't exist, create a new Perscription with this data.
     */
    create: XOR<PerscriptionCreateInput, PerscriptionUncheckedCreateInput>
    /**
     * In case the Perscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerscriptionUpdateInput, PerscriptionUncheckedUpdateInput>
  }

  /**
   * Perscription delete
   */
  export type PerscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionInclude<ExtArgs> | null
    /**
     * Filter which Perscription to delete.
     */
    where: PerscriptionWhereUniqueInput
  }

  /**
   * Perscription deleteMany
   */
  export type PerscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perscriptions to delete
     */
    where?: PerscriptionWhereInput
    /**
     * Limit how many Perscriptions to delete.
     */
    limit?: number
  }

  /**
   * Perscription without action
   */
  export type PerscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perscription
     */
    select?: PerscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perscription
     */
    omit?: PerscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: $Enums.RoleEnum | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: $Enums.RoleEnum | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: $Enums.RoleEnum
    created_at: Date
    updated_at: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: $Enums.RoleEnum
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'RoleEnum'>
    readonly created_at: FieldRef<"Role", 'DateTime'>
    readonly updated_at: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data?: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    cost: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    cost: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    cost: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    cost: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    cost: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    cost?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    cost?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cost?: true
    created_at?: true
    updated_at?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cost?: true
    created_at?: true
    updated_at?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cost?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    name: string
    description: string
    cost: number
    created_at: Date
    updated_at: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cost?: boolean
    created_at?: boolean
    updated_at?: boolean
    clinics?: boolean | Service$clinicsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cost?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cost?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    cost?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "cost" | "created_at" | "updated_at", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinics?: boolean | Service$clinicsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      clinics: Prisma.$ClinicServicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      cost: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinics<T extends Service$clinicsArgs<ExtArgs> = {}>(args?: Subset<T, Service$clinicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly cost: FieldRef<"Service", 'Int'>
    readonly created_at: FieldRef<"Service", 'DateTime'>
    readonly updated_at: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.clinics
   */
  export type Service$clinicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicServices
     */
    select?: ClinicServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicServices
     */
    omit?: ClinicServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicServicesInclude<ExtArgs> | null
    where?: ClinicServicesWhereInput
    orderBy?: ClinicServicesOrderByWithRelationInput | ClinicServicesOrderByWithRelationInput[]
    cursor?: ClinicServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClinicServicesScalarFieldEnum | ClinicServicesScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
    clinic_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    role_id: number | null
    clinic_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    picture: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    gender: $Enums.GenderEnum | null
    password: string | null
    access_token: string | null
    phone_number: string | null
    doctor_speciality: string | null
    role_id: number | null
    clinic_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    picture: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    gender: $Enums.GenderEnum | null
    password: string | null
    access_token: string | null
    phone_number: string | null
    doctor_speciality: string | null
    role_id: number | null
    clinic_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    picture: number
    firstname: number
    lastname: number
    email: number
    gender: number
    password: number
    access_token: number
    phone_number: number
    doctor_speciality: number
    role_id: number
    clinic_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    role_id?: true
    clinic_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    role_id?: true
    clinic_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    picture?: true
    firstname?: true
    lastname?: true
    email?: true
    gender?: true
    password?: true
    access_token?: true
    phone_number?: true
    doctor_speciality?: true
    role_id?: true
    clinic_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    picture?: true
    firstname?: true
    lastname?: true
    email?: true
    gender?: true
    password?: true
    access_token?: true
    phone_number?: true
    doctor_speciality?: true
    role_id?: true
    clinic_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    picture?: true
    firstname?: true
    lastname?: true
    email?: true
    gender?: true
    password?: true
    access_token?: true
    phone_number?: true
    doctor_speciality?: true
    role_id?: true
    clinic_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    picture: string | null
    firstname: string
    lastname: string
    email: string
    gender: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number: string | null
    doctor_speciality: string | null
    role_id: number
    clinic_id: number | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    picture?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    gender?: boolean
    password?: boolean
    access_token?: boolean
    phone_number?: boolean
    doctor_speciality?: boolean
    role_id?: boolean
    clinic_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    appointement_as_doctor?: boolean | User$appointement_as_doctorArgs<ExtArgs>
    appointement_as_patient?: boolean | User$appointement_as_patientArgs<ExtArgs>
    clinic?: boolean | User$clinicArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    picture?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    gender?: boolean
    password?: boolean
    access_token?: boolean
    phone_number?: boolean
    doctor_speciality?: boolean
    role_id?: boolean
    clinic_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    clinic?: boolean | User$clinicArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    picture?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    gender?: boolean
    password?: boolean
    access_token?: boolean
    phone_number?: boolean
    doctor_speciality?: boolean
    role_id?: boolean
    clinic_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    clinic?: boolean | User$clinicArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    picture?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    gender?: boolean
    password?: boolean
    access_token?: boolean
    phone_number?: boolean
    doctor_speciality?: boolean
    role_id?: boolean
    clinic_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "picture" | "firstname" | "lastname" | "email" | "gender" | "password" | "access_token" | "phone_number" | "doctor_speciality" | "role_id" | "clinic_id" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointement_as_doctor?: boolean | User$appointement_as_doctorArgs<ExtArgs>
    appointement_as_patient?: boolean | User$appointement_as_patientArgs<ExtArgs>
    clinic?: boolean | User$clinicArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | User$clinicArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | User$clinicArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      appointement_as_doctor: Prisma.$AppointementPayload<ExtArgs>[]
      appointement_as_patient: Prisma.$AppointementPayload<ExtArgs>[]
      clinic: Prisma.$ClinicPayload<ExtArgs> | null
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      picture: string | null
      firstname: string
      lastname: string
      email: string
      gender: $Enums.GenderEnum
      password: string
      access_token: string
      phone_number: string | null
      doctor_speciality: string | null
      role_id: number
      clinic_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointement_as_doctor<T extends User$appointement_as_doctorArgs<ExtArgs> = {}>(args?: Subset<T, User$appointement_as_doctorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointement_as_patient<T extends User$appointement_as_patientArgs<ExtArgs> = {}>(args?: Subset<T, User$appointement_as_patientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clinic<T extends User$clinicArgs<ExtArgs> = {}>(args?: Subset<T, User$clinicArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly picture: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'GenderEnum'>
    readonly password: FieldRef<"User", 'String'>
    readonly access_token: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly doctor_speciality: FieldRef<"User", 'String'>
    readonly role_id: FieldRef<"User", 'Int'>
    readonly clinic_id: FieldRef<"User", 'Int'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.appointement_as_doctor
   */
  export type User$appointement_as_doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    where?: AppointementWhereInput
    orderBy?: AppointementOrderByWithRelationInput | AppointementOrderByWithRelationInput[]
    cursor?: AppointementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointementScalarFieldEnum | AppointementScalarFieldEnum[]
  }

  /**
   * User.appointement_as_patient
   */
  export type User$appointement_as_patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointement
     */
    select?: AppointementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointement
     */
    omit?: AppointementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointementInclude<ExtArgs> | null
    where?: AppointementWhereInput
    orderBy?: AppointementOrderByWithRelationInput | AppointementOrderByWithRelationInput[]
    cursor?: AppointementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointementScalarFieldEnum | AppointementScalarFieldEnum[]
  }

  /**
   * User.clinic
   */
  export type User$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    where?: ClinicWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppointementScalarFieldEnum: {
    id: 'id',
    date: 'date',
    subject: 'subject',
    description: 'description',
    is_canceled: 'is_canceled',
    doctor_id: 'doctor_id',
    patient_id: 'patient_id',
    clinic_id: 'clinic_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AppointementScalarFieldEnum = (typeof AppointementScalarFieldEnum)[keyof typeof AppointementScalarFieldEnum]


  export const ClinicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rooms_number: 'rooms_number',
    receptionist_id: 'receptionist_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum]


  export const ClinicServicesScalarFieldEnum: {
    id: 'id',
    clinic_id: 'clinic_id',
    service_id: 'service_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClinicServicesScalarFieldEnum = (typeof ClinicServicesScalarFieldEnum)[keyof typeof ClinicServicesScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    price: 'price',
    discount: 'discount',
    text: 'text',
    appointement_id: 'appointement_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PerscriptionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    appointement_id: 'appointement_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PerscriptionScalarFieldEnum = (typeof PerscriptionScalarFieldEnum)[keyof typeof PerscriptionScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    cost: 'cost',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    picture: 'picture',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    gender: 'gender',
    password: 'password',
    access_token: 'access_token',
    phone_number: 'phone_number',
    doctor_speciality: 'doctor_speciality',
    role_id: 'role_id',
    clinic_id: 'clinic_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RoleEnum'
   */
  export type EnumRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleEnum'>
    


  /**
   * Reference to a field of type 'RoleEnum[]'
   */
  export type ListEnumRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleEnum[]'>
    


  /**
   * Reference to a field of type 'GenderEnum'
   */
  export type EnumGenderEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderEnum'>
    


  /**
   * Reference to a field of type 'GenderEnum[]'
   */
  export type ListEnumGenderEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AppointementWhereInput = {
    AND?: AppointementWhereInput | AppointementWhereInput[]
    OR?: AppointementWhereInput[]
    NOT?: AppointementWhereInput | AppointementWhereInput[]
    id?: IntFilter<"Appointement"> | number
    date?: DateTimeFilter<"Appointement"> | Date | string
    subject?: StringFilter<"Appointement"> | string
    description?: StringFilter<"Appointement"> | string
    is_canceled?: BoolFilter<"Appointement"> | boolean
    doctor_id?: IntFilter<"Appointement"> | number
    patient_id?: IntFilter<"Appointement"> | number
    clinic_id?: IntFilter<"Appointement"> | number
    created_at?: DateTimeFilter<"Appointement"> | Date | string
    updated_at?: DateTimeFilter<"Appointement"> | Date | string
    perscriptions?: PerscriptionListRelationFilter
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
  }

  export type AppointementOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    is_canceled?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
    clinic_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    perscriptions?: PerscriptionOrderByRelationAggregateInput
    invoice?: InvoiceOrderByWithRelationInput
    doctor?: UserOrderByWithRelationInput
    patient?: UserOrderByWithRelationInput
    clinic?: ClinicOrderByWithRelationInput
  }

  export type AppointementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointementWhereInput | AppointementWhereInput[]
    OR?: AppointementWhereInput[]
    NOT?: AppointementWhereInput | AppointementWhereInput[]
    date?: DateTimeFilter<"Appointement"> | Date | string
    subject?: StringFilter<"Appointement"> | string
    description?: StringFilter<"Appointement"> | string
    is_canceled?: BoolFilter<"Appointement"> | boolean
    doctor_id?: IntFilter<"Appointement"> | number
    patient_id?: IntFilter<"Appointement"> | number
    clinic_id?: IntFilter<"Appointement"> | number
    created_at?: DateTimeFilter<"Appointement"> | Date | string
    updated_at?: DateTimeFilter<"Appointement"> | Date | string
    perscriptions?: PerscriptionListRelationFilter
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
  }, "id">

  export type AppointementOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    is_canceled?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
    clinic_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AppointementCountOrderByAggregateInput
    _avg?: AppointementAvgOrderByAggregateInput
    _max?: AppointementMaxOrderByAggregateInput
    _min?: AppointementMinOrderByAggregateInput
    _sum?: AppointementSumOrderByAggregateInput
  }

  export type AppointementScalarWhereWithAggregatesInput = {
    AND?: AppointementScalarWhereWithAggregatesInput | AppointementScalarWhereWithAggregatesInput[]
    OR?: AppointementScalarWhereWithAggregatesInput[]
    NOT?: AppointementScalarWhereWithAggregatesInput | AppointementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointement"> | number
    date?: DateTimeWithAggregatesFilter<"Appointement"> | Date | string
    subject?: StringWithAggregatesFilter<"Appointement"> | string
    description?: StringWithAggregatesFilter<"Appointement"> | string
    is_canceled?: BoolWithAggregatesFilter<"Appointement"> | boolean
    doctor_id?: IntWithAggregatesFilter<"Appointement"> | number
    patient_id?: IntWithAggregatesFilter<"Appointement"> | number
    clinic_id?: IntWithAggregatesFilter<"Appointement"> | number
    created_at?: DateTimeWithAggregatesFilter<"Appointement"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Appointement"> | Date | string
  }

  export type ClinicWhereInput = {
    AND?: ClinicWhereInput | ClinicWhereInput[]
    OR?: ClinicWhereInput[]
    NOT?: ClinicWhereInput | ClinicWhereInput[]
    id?: IntFilter<"Clinic"> | number
    name?: StringFilter<"Clinic"> | string
    rooms_number?: IntFilter<"Clinic"> | number
    receptionist_id?: IntNullableFilter<"Clinic"> | number | null
    created_at?: DateTimeFilter<"Clinic"> | Date | string
    updated_at?: DateTimeFilter<"Clinic"> | Date | string
    services?: ClinicServicesListRelationFilter
    appointements?: AppointementListRelationFilter
    users?: UserListRelationFilter
  }

  export type ClinicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rooms_number?: SortOrder
    receptionist_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    services?: ClinicServicesOrderByRelationAggregateInput
    appointements?: AppointementOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type ClinicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    receptionist_id?: number
    AND?: ClinicWhereInput | ClinicWhereInput[]
    OR?: ClinicWhereInput[]
    NOT?: ClinicWhereInput | ClinicWhereInput[]
    name?: StringFilter<"Clinic"> | string
    rooms_number?: IntFilter<"Clinic"> | number
    created_at?: DateTimeFilter<"Clinic"> | Date | string
    updated_at?: DateTimeFilter<"Clinic"> | Date | string
    services?: ClinicServicesListRelationFilter
    appointements?: AppointementListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "receptionist_id">

  export type ClinicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rooms_number?: SortOrder
    receptionist_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ClinicCountOrderByAggregateInput
    _avg?: ClinicAvgOrderByAggregateInput
    _max?: ClinicMaxOrderByAggregateInput
    _min?: ClinicMinOrderByAggregateInput
    _sum?: ClinicSumOrderByAggregateInput
  }

  export type ClinicScalarWhereWithAggregatesInput = {
    AND?: ClinicScalarWhereWithAggregatesInput | ClinicScalarWhereWithAggregatesInput[]
    OR?: ClinicScalarWhereWithAggregatesInput[]
    NOT?: ClinicScalarWhereWithAggregatesInput | ClinicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clinic"> | number
    name?: StringWithAggregatesFilter<"Clinic"> | string
    rooms_number?: IntWithAggregatesFilter<"Clinic"> | number
    receptionist_id?: IntNullableWithAggregatesFilter<"Clinic"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Clinic"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Clinic"> | Date | string
  }

  export type ClinicServicesWhereInput = {
    AND?: ClinicServicesWhereInput | ClinicServicesWhereInput[]
    OR?: ClinicServicesWhereInput[]
    NOT?: ClinicServicesWhereInput | ClinicServicesWhereInput[]
    id?: IntFilter<"ClinicServices"> | number
    clinic_id?: IntFilter<"ClinicServices"> | number
    service_id?: IntFilter<"ClinicServices"> | number
    created_at?: DateTimeFilter<"ClinicServices"> | Date | string
    updated_at?: DateTimeFilter<"ClinicServices"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ClinicServicesOrderByWithRelationInput = {
    id?: SortOrder
    clinic_id?: SortOrder
    service_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clinic?: ClinicOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type ClinicServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clinic_id_service_id?: ClinicServicesClinic_idService_idCompoundUniqueInput
    AND?: ClinicServicesWhereInput | ClinicServicesWhereInput[]
    OR?: ClinicServicesWhereInput[]
    NOT?: ClinicServicesWhereInput | ClinicServicesWhereInput[]
    clinic_id?: IntFilter<"ClinicServices"> | number
    service_id?: IntFilter<"ClinicServices"> | number
    created_at?: DateTimeFilter<"ClinicServices"> | Date | string
    updated_at?: DateTimeFilter<"ClinicServices"> | Date | string
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "clinic_id_service_id">

  export type ClinicServicesOrderByWithAggregationInput = {
    id?: SortOrder
    clinic_id?: SortOrder
    service_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ClinicServicesCountOrderByAggregateInput
    _avg?: ClinicServicesAvgOrderByAggregateInput
    _max?: ClinicServicesMaxOrderByAggregateInput
    _min?: ClinicServicesMinOrderByAggregateInput
    _sum?: ClinicServicesSumOrderByAggregateInput
  }

  export type ClinicServicesScalarWhereWithAggregatesInput = {
    AND?: ClinicServicesScalarWhereWithAggregatesInput | ClinicServicesScalarWhereWithAggregatesInput[]
    OR?: ClinicServicesScalarWhereWithAggregatesInput[]
    NOT?: ClinicServicesScalarWhereWithAggregatesInput | ClinicServicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClinicServices"> | number
    clinic_id?: IntWithAggregatesFilter<"ClinicServices"> | number
    service_id?: IntWithAggregatesFilter<"ClinicServices"> | number
    created_at?: DateTimeWithAggregatesFilter<"ClinicServices"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ClinicServices"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: IntFilter<"Invoice"> | number
    price?: IntFilter<"Invoice"> | number
    discount?: IntFilter<"Invoice"> | number
    text?: StringFilter<"Invoice"> | string
    appointement_id?: IntFilter<"Invoice"> | number
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    updated_at?: DateTimeFilter<"Invoice"> | Date | string
    appointment?: XOR<AppointementScalarRelationFilter, AppointementWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    text?: SortOrder
    appointement_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    appointment?: AppointementOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    appointement_id?: number
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    price?: IntFilter<"Invoice"> | number
    discount?: IntFilter<"Invoice"> | number
    text?: StringFilter<"Invoice"> | string
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    updated_at?: DateTimeFilter<"Invoice"> | Date | string
    appointment?: XOR<AppointementScalarRelationFilter, AppointementWhereInput>
  }, "id" | "appointement_id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    text?: SortOrder
    appointement_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invoice"> | number
    price?: IntWithAggregatesFilter<"Invoice"> | number
    discount?: IntWithAggregatesFilter<"Invoice"> | number
    text?: StringWithAggregatesFilter<"Invoice"> | string
    appointement_id?: IntWithAggregatesFilter<"Invoice"> | number
    created_at?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type PerscriptionWhereInput = {
    AND?: PerscriptionWhereInput | PerscriptionWhereInput[]
    OR?: PerscriptionWhereInput[]
    NOT?: PerscriptionWhereInput | PerscriptionWhereInput[]
    id?: IntFilter<"Perscription"> | number
    title?: StringFilter<"Perscription"> | string
    description?: StringFilter<"Perscription"> | string
    appointement_id?: IntFilter<"Perscription"> | number
    created_at?: DateTimeFilter<"Perscription"> | Date | string
    updated_at?: DateTimeFilter<"Perscription"> | Date | string
    appointement?: XOR<AppointementScalarRelationFilter, AppointementWhereInput>
  }

  export type PerscriptionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    appointement_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    appointement?: AppointementOrderByWithRelationInput
  }

  export type PerscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PerscriptionWhereInput | PerscriptionWhereInput[]
    OR?: PerscriptionWhereInput[]
    NOT?: PerscriptionWhereInput | PerscriptionWhereInput[]
    title?: StringFilter<"Perscription"> | string
    description?: StringFilter<"Perscription"> | string
    appointement_id?: IntFilter<"Perscription"> | number
    created_at?: DateTimeFilter<"Perscription"> | Date | string
    updated_at?: DateTimeFilter<"Perscription"> | Date | string
    appointement?: XOR<AppointementScalarRelationFilter, AppointementWhereInput>
  }, "id">

  export type PerscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    appointement_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PerscriptionCountOrderByAggregateInput
    _avg?: PerscriptionAvgOrderByAggregateInput
    _max?: PerscriptionMaxOrderByAggregateInput
    _min?: PerscriptionMinOrderByAggregateInput
    _sum?: PerscriptionSumOrderByAggregateInput
  }

  export type PerscriptionScalarWhereWithAggregatesInput = {
    AND?: PerscriptionScalarWhereWithAggregatesInput | PerscriptionScalarWhereWithAggregatesInput[]
    OR?: PerscriptionScalarWhereWithAggregatesInput[]
    NOT?: PerscriptionScalarWhereWithAggregatesInput | PerscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Perscription"> | number
    title?: StringWithAggregatesFilter<"Perscription"> | string
    description?: StringWithAggregatesFilter<"Perscription"> | string
    appointement_id?: IntWithAggregatesFilter<"Perscription"> | number
    created_at?: DateTimeWithAggregatesFilter<"Perscription"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Perscription"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: EnumRoleEnumFilter<"Role"> | $Enums.RoleEnum
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: EnumRoleEnumFilter<"Role"> | $Enums.RoleEnum
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: EnumRoleEnumWithAggregatesFilter<"Role"> | $Enums.RoleEnum
    created_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    cost?: IntFilter<"Service"> | number
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
    clinics?: ClinicServicesListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clinics?: ClinicServicesOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    cost?: IntFilter<"Service"> | number
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
    clinics?: ClinicServicesListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    cost?: IntWithAggregatesFilter<"Service"> | number
    created_at?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    picture?: StringNullableFilter<"User"> | string | null
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    gender?: EnumGenderEnumFilter<"User"> | $Enums.GenderEnum
    password?: StringFilter<"User"> | string
    access_token?: StringFilter<"User"> | string
    phone_number?: StringNullableFilter<"User"> | string | null
    doctor_speciality?: StringNullableFilter<"User"> | string | null
    role_id?: IntFilter<"User"> | number
    clinic_id?: IntNullableFilter<"User"> | number | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    appointement_as_doctor?: AppointementListRelationFilter
    appointement_as_patient?: AppointementListRelationFilter
    clinic?: XOR<ClinicNullableScalarRelationFilter, ClinicWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    picture?: SortOrderInput | SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    access_token?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    doctor_speciality?: SortOrderInput | SortOrder
    role_id?: SortOrder
    clinic_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    appointement_as_doctor?: AppointementOrderByRelationAggregateInput
    appointement_as_patient?: AppointementOrderByRelationAggregateInput
    clinic?: ClinicOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    picture?: StringNullableFilter<"User"> | string | null
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    gender?: EnumGenderEnumFilter<"User"> | $Enums.GenderEnum
    password?: StringFilter<"User"> | string
    access_token?: StringFilter<"User"> | string
    phone_number?: StringNullableFilter<"User"> | string | null
    doctor_speciality?: StringNullableFilter<"User"> | string | null
    role_id?: IntFilter<"User"> | number
    clinic_id?: IntNullableFilter<"User"> | number | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    appointement_as_doctor?: AppointementListRelationFilter
    appointement_as_patient?: AppointementListRelationFilter
    clinic?: XOR<ClinicNullableScalarRelationFilter, ClinicWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    picture?: SortOrderInput | SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    access_token?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    doctor_speciality?: SortOrderInput | SortOrder
    role_id?: SortOrder
    clinic_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    gender?: EnumGenderEnumWithAggregatesFilter<"User"> | $Enums.GenderEnum
    password?: StringWithAggregatesFilter<"User"> | string
    access_token?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    doctor_speciality?: StringNullableWithAggregatesFilter<"User"> | string | null
    role_id?: IntWithAggregatesFilter<"User"> | number
    clinic_id?: IntNullableWithAggregatesFilter<"User"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AppointementCreateInput = {
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    perscriptions?: PerscriptionCreateNestedManyWithoutAppointementInput
    invoice?: InvoiceCreateNestedOneWithoutAppointmentInput
    doctor: UserCreateNestedOneWithoutAppointement_as_doctorInput
    patient: UserCreateNestedOneWithoutAppointement_as_patientInput
    clinic: ClinicCreateNestedOneWithoutAppointementsInput
  }

  export type AppointementUncheckedCreateInput = {
    id?: number
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    doctor_id: number
    patient_id: number
    clinic_id: number
    created_at?: Date | string
    updated_at?: Date | string
    perscriptions?: PerscriptionUncheckedCreateNestedManyWithoutAppointementInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointementUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    perscriptions?: PerscriptionUpdateManyWithoutAppointementNestedInput
    invoice?: InvoiceUpdateOneWithoutAppointmentNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppointement_as_doctorNestedInput
    patient?: UserUpdateOneRequiredWithoutAppointement_as_patientNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutAppointementsNestedInput
  }

  export type AppointementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    doctor_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    perscriptions?: PerscriptionUncheckedUpdateManyWithoutAppointementNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointementCreateManyInput = {
    id?: number
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    doctor_id: number
    patient_id: number
    clinic_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointementUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    doctor_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicCreateInput = {
    name: string
    rooms_number: number
    receptionist_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    services?: ClinicServicesCreateNestedManyWithoutClinicInput
    appointements?: AppointementCreateNestedManyWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateInput = {
    id?: number
    name: string
    rooms_number: number
    receptionist_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    services?: ClinicServicesUncheckedCreateNestedManyWithoutClinicInput
    appointements?: AppointementUncheckedCreateNestedManyWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rooms_number?: IntFieldUpdateOperationsInput | number
    receptionist_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ClinicServicesUpdateManyWithoutClinicNestedInput
    appointements?: AppointementUpdateManyWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rooms_number?: IntFieldUpdateOperationsInput | number
    receptionist_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ClinicServicesUncheckedUpdateManyWithoutClinicNestedInput
    appointements?: AppointementUncheckedUpdateManyWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ClinicCreateManyInput = {
    id?: number
    name: string
    rooms_number: number
    receptionist_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClinicUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rooms_number?: IntFieldUpdateOperationsInput | number
    receptionist_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rooms_number?: IntFieldUpdateOperationsInput | number
    receptionist_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicServicesCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    clinic: ClinicCreateNestedOneWithoutServicesInput
    service: ServiceCreateNestedOneWithoutClinicsInput
  }

  export type ClinicServicesUncheckedCreateInput = {
    id?: number
    clinic_id: number
    service_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClinicServicesUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutClinicsNestedInput
  }

  export type ClinicServicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicServicesCreateManyInput = {
    id?: number
    clinic_id: number
    service_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClinicServicesUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicServicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    price: number
    discount?: number
    text: string
    created_at?: Date | string
    updated_at?: Date | string
    appointment: AppointementCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: number
    price: number
    discount?: number
    text: string
    appointement_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoiceUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointementUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    appointement_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: number
    price: number
    discount?: number
    text: string
    appointement_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    appointement_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerscriptionCreateInput = {
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    appointement: AppointementCreateNestedOneWithoutPerscriptionsInput
  }

  export type PerscriptionUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    appointement_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PerscriptionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointement?: AppointementUpdateOneRequiredWithoutPerscriptionsNestedInput
  }

  export type PerscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    appointement_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerscriptionCreateManyInput = {
    id?: number
    title: string
    description: string
    appointement_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PerscriptionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    appointement_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    name: string
    description: string
    cost: number
    created_at?: Date | string
    updated_at?: Date | string
    clinics?: ClinicServicesCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    cost: number
    created_at?: Date | string
    updated_at?: Date | string
    clinics?: ClinicServicesUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clinics?: ClinicServicesUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clinics?: ClinicServicesUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    name: string
    description: string
    cost: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    appointement_as_doctor?: AppointementCreateNestedManyWithoutDoctorInput
    appointement_as_patient?: AppointementCreateNestedManyWithoutPatientInput
    clinic?: ClinicCreateNestedOneWithoutUsersInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    role_id: number
    clinic_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    appointement_as_doctor?: AppointementUncheckedCreateNestedManyWithoutDoctorInput
    appointement_as_patient?: AppointementUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserUpdateInput = {
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointement_as_doctor?: AppointementUpdateManyWithoutDoctorNestedInput
    appointement_as_patient?: AppointementUpdateManyWithoutPatientNestedInput
    clinic?: ClinicUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointement_as_doctor?: AppointementUncheckedUpdateManyWithoutDoctorNestedInput
    appointement_as_patient?: AppointementUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    role_id: number
    clinic_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PerscriptionListRelationFilter = {
    every?: PerscriptionWhereInput
    some?: PerscriptionWhereInput
    none?: PerscriptionWhereInput
  }

  export type InvoiceNullableScalarRelationFilter = {
    is?: InvoiceWhereInput | null
    isNot?: InvoiceWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClinicScalarRelationFilter = {
    is?: ClinicWhereInput
    isNot?: ClinicWhereInput
  }

  export type PerscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointementCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    is_canceled?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
    clinic_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppointementAvgOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
    clinic_id?: SortOrder
  }

  export type AppointementMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    is_canceled?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
    clinic_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppointementMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    is_canceled?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
    clinic_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppointementSumOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
    clinic_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClinicServicesListRelationFilter = {
    every?: ClinicServicesWhereInput
    some?: ClinicServicesWhereInput
    none?: ClinicServicesWhereInput
  }

  export type AppointementListRelationFilter = {
    every?: AppointementWhereInput
    some?: AppointementWhereInput
    none?: AppointementWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClinicServicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClinicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rooms_number?: SortOrder
    receptionist_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClinicAvgOrderByAggregateInput = {
    id?: SortOrder
    rooms_number?: SortOrder
    receptionist_id?: SortOrder
  }

  export type ClinicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rooms_number?: SortOrder
    receptionist_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClinicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rooms_number?: SortOrder
    receptionist_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClinicSumOrderByAggregateInput = {
    id?: SortOrder
    rooms_number?: SortOrder
    receptionist_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ClinicServicesClinic_idService_idCompoundUniqueInput = {
    clinic_id: number
    service_id: number
  }

  export type ClinicServicesCountOrderByAggregateInput = {
    id?: SortOrder
    clinic_id?: SortOrder
    service_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClinicServicesAvgOrderByAggregateInput = {
    id?: SortOrder
    clinic_id?: SortOrder
    service_id?: SortOrder
  }

  export type ClinicServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    clinic_id?: SortOrder
    service_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClinicServicesMinOrderByAggregateInput = {
    id?: SortOrder
    clinic_id?: SortOrder
    service_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClinicServicesSumOrderByAggregateInput = {
    id?: SortOrder
    clinic_id?: SortOrder
    service_id?: SortOrder
  }

  export type AppointementScalarRelationFilter = {
    is?: AppointementWhereInput
    isNot?: AppointementWhereInput
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    text?: SortOrder
    appointement_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    appointement_id?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    text?: SortOrder
    appointement_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    text?: SortOrder
    appointement_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    appointement_id?: SortOrder
  }

  export type PerscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    appointement_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PerscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    appointement_id?: SortOrder
  }

  export type PerscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    appointement_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PerscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    appointement_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PerscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    appointement_id?: SortOrder
  }

  export type EnumRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumFilter<$PrismaModel> | $Enums.RoleEnum
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.RoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumRoleEnumFilter<$PrismaModel>
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderEnumFilter<$PrismaModel> | $Enums.GenderEnum
  }

  export type ClinicNullableScalarRelationFilter = {
    is?: ClinicWhereInput | null
    isNot?: ClinicWhereInput | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    picture?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    access_token?: SortOrder
    phone_number?: SortOrder
    doctor_speciality?: SortOrder
    role_id?: SortOrder
    clinic_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    clinic_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    picture?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    access_token?: SortOrder
    phone_number?: SortOrder
    doctor_speciality?: SortOrder
    role_id?: SortOrder
    clinic_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    picture?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    access_token?: SortOrder
    phone_number?: SortOrder
    doctor_speciality?: SortOrder
    role_id?: SortOrder
    clinic_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    clinic_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderEnumWithAggregatesFilter<$PrismaModel> | $Enums.GenderEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderEnumFilter<$PrismaModel>
    _max?: NestedEnumGenderEnumFilter<$PrismaModel>
  }

  export type PerscriptionCreateNestedManyWithoutAppointementInput = {
    create?: XOR<PerscriptionCreateWithoutAppointementInput, PerscriptionUncheckedCreateWithoutAppointementInput> | PerscriptionCreateWithoutAppointementInput[] | PerscriptionUncheckedCreateWithoutAppointementInput[]
    connectOrCreate?: PerscriptionCreateOrConnectWithoutAppointementInput | PerscriptionCreateOrConnectWithoutAppointementInput[]
    createMany?: PerscriptionCreateManyAppointementInputEnvelope
    connect?: PerscriptionWhereUniqueInput | PerscriptionWhereUniqueInput[]
  }

  export type InvoiceCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput
    connect?: InvoiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointement_as_doctorInput = {
    create?: XOR<UserCreateWithoutAppointement_as_doctorInput, UserUncheckedCreateWithoutAppointement_as_doctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointement_as_doctorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointement_as_patientInput = {
    create?: XOR<UserCreateWithoutAppointement_as_patientInput, UserUncheckedCreateWithoutAppointement_as_patientInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointement_as_patientInput
    connect?: UserWhereUniqueInput
  }

  export type ClinicCreateNestedOneWithoutAppointementsInput = {
    create?: XOR<ClinicCreateWithoutAppointementsInput, ClinicUncheckedCreateWithoutAppointementsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutAppointementsInput
    connect?: ClinicWhereUniqueInput
  }

  export type PerscriptionUncheckedCreateNestedManyWithoutAppointementInput = {
    create?: XOR<PerscriptionCreateWithoutAppointementInput, PerscriptionUncheckedCreateWithoutAppointementInput> | PerscriptionCreateWithoutAppointementInput[] | PerscriptionUncheckedCreateWithoutAppointementInput[]
    connectOrCreate?: PerscriptionCreateOrConnectWithoutAppointementInput | PerscriptionCreateOrConnectWithoutAppointementInput[]
    createMany?: PerscriptionCreateManyAppointementInputEnvelope
    connect?: PerscriptionWhereUniqueInput | PerscriptionWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput
    connect?: InvoiceWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PerscriptionUpdateManyWithoutAppointementNestedInput = {
    create?: XOR<PerscriptionCreateWithoutAppointementInput, PerscriptionUncheckedCreateWithoutAppointementInput> | PerscriptionCreateWithoutAppointementInput[] | PerscriptionUncheckedCreateWithoutAppointementInput[]
    connectOrCreate?: PerscriptionCreateOrConnectWithoutAppointementInput | PerscriptionCreateOrConnectWithoutAppointementInput[]
    upsert?: PerscriptionUpsertWithWhereUniqueWithoutAppointementInput | PerscriptionUpsertWithWhereUniqueWithoutAppointementInput[]
    createMany?: PerscriptionCreateManyAppointementInputEnvelope
    set?: PerscriptionWhereUniqueInput | PerscriptionWhereUniqueInput[]
    disconnect?: PerscriptionWhereUniqueInput | PerscriptionWhereUniqueInput[]
    delete?: PerscriptionWhereUniqueInput | PerscriptionWhereUniqueInput[]
    connect?: PerscriptionWhereUniqueInput | PerscriptionWhereUniqueInput[]
    update?: PerscriptionUpdateWithWhereUniqueWithoutAppointementInput | PerscriptionUpdateWithWhereUniqueWithoutAppointementInput[]
    updateMany?: PerscriptionUpdateManyWithWhereWithoutAppointementInput | PerscriptionUpdateManyWithWhereWithoutAppointementInput[]
    deleteMany?: PerscriptionScalarWhereInput | PerscriptionScalarWhereInput[]
  }

  export type InvoiceUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput
    upsert?: InvoiceUpsertWithoutAppointmentInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutAppointmentInput, InvoiceUpdateWithoutAppointmentInput>, InvoiceUncheckedUpdateWithoutAppointmentInput>
  }

  export type UserUpdateOneRequiredWithoutAppointement_as_doctorNestedInput = {
    create?: XOR<UserCreateWithoutAppointement_as_doctorInput, UserUncheckedCreateWithoutAppointement_as_doctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointement_as_doctorInput
    upsert?: UserUpsertWithoutAppointement_as_doctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointement_as_doctorInput, UserUpdateWithoutAppointement_as_doctorInput>, UserUncheckedUpdateWithoutAppointement_as_doctorInput>
  }

  export type UserUpdateOneRequiredWithoutAppointement_as_patientNestedInput = {
    create?: XOR<UserCreateWithoutAppointement_as_patientInput, UserUncheckedCreateWithoutAppointement_as_patientInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointement_as_patientInput
    upsert?: UserUpsertWithoutAppointement_as_patientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointement_as_patientInput, UserUpdateWithoutAppointement_as_patientInput>, UserUncheckedUpdateWithoutAppointement_as_patientInput>
  }

  export type ClinicUpdateOneRequiredWithoutAppointementsNestedInput = {
    create?: XOR<ClinicCreateWithoutAppointementsInput, ClinicUncheckedCreateWithoutAppointementsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutAppointementsInput
    upsert?: ClinicUpsertWithoutAppointementsInput
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutAppointementsInput, ClinicUpdateWithoutAppointementsInput>, ClinicUncheckedUpdateWithoutAppointementsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PerscriptionUncheckedUpdateManyWithoutAppointementNestedInput = {
    create?: XOR<PerscriptionCreateWithoutAppointementInput, PerscriptionUncheckedCreateWithoutAppointementInput> | PerscriptionCreateWithoutAppointementInput[] | PerscriptionUncheckedCreateWithoutAppointementInput[]
    connectOrCreate?: PerscriptionCreateOrConnectWithoutAppointementInput | PerscriptionCreateOrConnectWithoutAppointementInput[]
    upsert?: PerscriptionUpsertWithWhereUniqueWithoutAppointementInput | PerscriptionUpsertWithWhereUniqueWithoutAppointementInput[]
    createMany?: PerscriptionCreateManyAppointementInputEnvelope
    set?: PerscriptionWhereUniqueInput | PerscriptionWhereUniqueInput[]
    disconnect?: PerscriptionWhereUniqueInput | PerscriptionWhereUniqueInput[]
    delete?: PerscriptionWhereUniqueInput | PerscriptionWhereUniqueInput[]
    connect?: PerscriptionWhereUniqueInput | PerscriptionWhereUniqueInput[]
    update?: PerscriptionUpdateWithWhereUniqueWithoutAppointementInput | PerscriptionUpdateWithWhereUniqueWithoutAppointementInput[]
    updateMany?: PerscriptionUpdateManyWithWhereWithoutAppointementInput | PerscriptionUpdateManyWithWhereWithoutAppointementInput[]
    deleteMany?: PerscriptionScalarWhereInput | PerscriptionScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput
    upsert?: InvoiceUpsertWithoutAppointmentInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutAppointmentInput, InvoiceUpdateWithoutAppointmentInput>, InvoiceUncheckedUpdateWithoutAppointmentInput>
  }

  export type ClinicServicesCreateNestedManyWithoutClinicInput = {
    create?: XOR<ClinicServicesCreateWithoutClinicInput, ClinicServicesUncheckedCreateWithoutClinicInput> | ClinicServicesCreateWithoutClinicInput[] | ClinicServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ClinicServicesCreateOrConnectWithoutClinicInput | ClinicServicesCreateOrConnectWithoutClinicInput[]
    createMany?: ClinicServicesCreateManyClinicInputEnvelope
    connect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
  }

  export type AppointementCreateNestedManyWithoutClinicInput = {
    create?: XOR<AppointementCreateWithoutClinicInput, AppointementUncheckedCreateWithoutClinicInput> | AppointementCreateWithoutClinicInput[] | AppointementUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutClinicInput | AppointementCreateOrConnectWithoutClinicInput[]
    createMany?: AppointementCreateManyClinicInputEnvelope
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutClinicInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClinicServicesUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<ClinicServicesCreateWithoutClinicInput, ClinicServicesUncheckedCreateWithoutClinicInput> | ClinicServicesCreateWithoutClinicInput[] | ClinicServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ClinicServicesCreateOrConnectWithoutClinicInput | ClinicServicesCreateOrConnectWithoutClinicInput[]
    createMany?: ClinicServicesCreateManyClinicInputEnvelope
    connect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
  }

  export type AppointementUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<AppointementCreateWithoutClinicInput, AppointementUncheckedCreateWithoutClinicInput> | AppointementCreateWithoutClinicInput[] | AppointementUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutClinicInput | AppointementCreateOrConnectWithoutClinicInput[]
    createMany?: AppointementCreateManyClinicInputEnvelope
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClinicServicesUpdateManyWithoutClinicNestedInput = {
    create?: XOR<ClinicServicesCreateWithoutClinicInput, ClinicServicesUncheckedCreateWithoutClinicInput> | ClinicServicesCreateWithoutClinicInput[] | ClinicServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ClinicServicesCreateOrConnectWithoutClinicInput | ClinicServicesCreateOrConnectWithoutClinicInput[]
    upsert?: ClinicServicesUpsertWithWhereUniqueWithoutClinicInput | ClinicServicesUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: ClinicServicesCreateManyClinicInputEnvelope
    set?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    disconnect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    delete?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    connect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    update?: ClinicServicesUpdateWithWhereUniqueWithoutClinicInput | ClinicServicesUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: ClinicServicesUpdateManyWithWhereWithoutClinicInput | ClinicServicesUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: ClinicServicesScalarWhereInput | ClinicServicesScalarWhereInput[]
  }

  export type AppointementUpdateManyWithoutClinicNestedInput = {
    create?: XOR<AppointementCreateWithoutClinicInput, AppointementUncheckedCreateWithoutClinicInput> | AppointementCreateWithoutClinicInput[] | AppointementUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutClinicInput | AppointementCreateOrConnectWithoutClinicInput[]
    upsert?: AppointementUpsertWithWhereUniqueWithoutClinicInput | AppointementUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: AppointementCreateManyClinicInputEnvelope
    set?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    disconnect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    delete?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    update?: AppointementUpdateWithWhereUniqueWithoutClinicInput | AppointementUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: AppointementUpdateManyWithWhereWithoutClinicInput | AppointementUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: AppointementScalarWhereInput | AppointementScalarWhereInput[]
  }

  export type UserUpdateManyWithoutClinicNestedInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClinicInput | UserUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClinicInput | UserUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClinicInput | UserUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClinicServicesUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<ClinicServicesCreateWithoutClinicInput, ClinicServicesUncheckedCreateWithoutClinicInput> | ClinicServicesCreateWithoutClinicInput[] | ClinicServicesUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ClinicServicesCreateOrConnectWithoutClinicInput | ClinicServicesCreateOrConnectWithoutClinicInput[]
    upsert?: ClinicServicesUpsertWithWhereUniqueWithoutClinicInput | ClinicServicesUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: ClinicServicesCreateManyClinicInputEnvelope
    set?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    disconnect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    delete?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    connect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    update?: ClinicServicesUpdateWithWhereUniqueWithoutClinicInput | ClinicServicesUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: ClinicServicesUpdateManyWithWhereWithoutClinicInput | ClinicServicesUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: ClinicServicesScalarWhereInput | ClinicServicesScalarWhereInput[]
  }

  export type AppointementUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<AppointementCreateWithoutClinicInput, AppointementUncheckedCreateWithoutClinicInput> | AppointementCreateWithoutClinicInput[] | AppointementUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutClinicInput | AppointementCreateOrConnectWithoutClinicInput[]
    upsert?: AppointementUpsertWithWhereUniqueWithoutClinicInput | AppointementUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: AppointementCreateManyClinicInputEnvelope
    set?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    disconnect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    delete?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    update?: AppointementUpdateWithWhereUniqueWithoutClinicInput | AppointementUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: AppointementUpdateManyWithWhereWithoutClinicInput | AppointementUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: AppointementScalarWhereInput | AppointementScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClinicInput | UserUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClinicInput | UserUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClinicInput | UserUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClinicCreateNestedOneWithoutServicesInput = {
    create?: XOR<ClinicCreateWithoutServicesInput, ClinicUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutServicesInput
    connect?: ClinicWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutClinicsInput = {
    create?: XOR<ServiceCreateWithoutClinicsInput, ServiceUncheckedCreateWithoutClinicsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutClinicsInput
    connect?: ServiceWhereUniqueInput
  }

  export type ClinicUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ClinicCreateWithoutServicesInput, ClinicUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutServicesInput
    upsert?: ClinicUpsertWithoutServicesInput
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutServicesInput, ClinicUpdateWithoutServicesInput>, ClinicUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutClinicsNestedInput = {
    create?: XOR<ServiceCreateWithoutClinicsInput, ServiceUncheckedCreateWithoutClinicsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutClinicsInput
    upsert?: ServiceUpsertWithoutClinicsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutClinicsInput, ServiceUpdateWithoutClinicsInput>, ServiceUncheckedUpdateWithoutClinicsInput>
  }

  export type AppointementCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<AppointementCreateWithoutInvoiceInput, AppointementUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: AppointementCreateOrConnectWithoutInvoiceInput
    connect?: AppointementWhereUniqueInput
  }

  export type AppointementUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<AppointementCreateWithoutInvoiceInput, AppointementUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: AppointementCreateOrConnectWithoutInvoiceInput
    upsert?: AppointementUpsertWithoutInvoiceInput
    connect?: AppointementWhereUniqueInput
    update?: XOR<XOR<AppointementUpdateToOneWithWhereWithoutInvoiceInput, AppointementUpdateWithoutInvoiceInput>, AppointementUncheckedUpdateWithoutInvoiceInput>
  }

  export type AppointementCreateNestedOneWithoutPerscriptionsInput = {
    create?: XOR<AppointementCreateWithoutPerscriptionsInput, AppointementUncheckedCreateWithoutPerscriptionsInput>
    connectOrCreate?: AppointementCreateOrConnectWithoutPerscriptionsInput
    connect?: AppointementWhereUniqueInput
  }

  export type AppointementUpdateOneRequiredWithoutPerscriptionsNestedInput = {
    create?: XOR<AppointementCreateWithoutPerscriptionsInput, AppointementUncheckedCreateWithoutPerscriptionsInput>
    connectOrCreate?: AppointementCreateOrConnectWithoutPerscriptionsInput
    upsert?: AppointementUpsertWithoutPerscriptionsInput
    connect?: AppointementWhereUniqueInput
    update?: XOR<XOR<AppointementUpdateToOneWithWhereWithoutPerscriptionsInput, AppointementUpdateWithoutPerscriptionsInput>, AppointementUncheckedUpdateWithoutPerscriptionsInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumRoleEnumFieldUpdateOperationsInput = {
    set?: $Enums.RoleEnum
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClinicServicesCreateNestedManyWithoutServiceInput = {
    create?: XOR<ClinicServicesCreateWithoutServiceInput, ClinicServicesUncheckedCreateWithoutServiceInput> | ClinicServicesCreateWithoutServiceInput[] | ClinicServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClinicServicesCreateOrConnectWithoutServiceInput | ClinicServicesCreateOrConnectWithoutServiceInput[]
    createMany?: ClinicServicesCreateManyServiceInputEnvelope
    connect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
  }

  export type ClinicServicesUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ClinicServicesCreateWithoutServiceInput, ClinicServicesUncheckedCreateWithoutServiceInput> | ClinicServicesCreateWithoutServiceInput[] | ClinicServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClinicServicesCreateOrConnectWithoutServiceInput | ClinicServicesCreateOrConnectWithoutServiceInput[]
    createMany?: ClinicServicesCreateManyServiceInputEnvelope
    connect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
  }

  export type ClinicServicesUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ClinicServicesCreateWithoutServiceInput, ClinicServicesUncheckedCreateWithoutServiceInput> | ClinicServicesCreateWithoutServiceInput[] | ClinicServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClinicServicesCreateOrConnectWithoutServiceInput | ClinicServicesCreateOrConnectWithoutServiceInput[]
    upsert?: ClinicServicesUpsertWithWhereUniqueWithoutServiceInput | ClinicServicesUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ClinicServicesCreateManyServiceInputEnvelope
    set?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    disconnect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    delete?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    connect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    update?: ClinicServicesUpdateWithWhereUniqueWithoutServiceInput | ClinicServicesUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ClinicServicesUpdateManyWithWhereWithoutServiceInput | ClinicServicesUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ClinicServicesScalarWhereInput | ClinicServicesScalarWhereInput[]
  }

  export type ClinicServicesUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ClinicServicesCreateWithoutServiceInput, ClinicServicesUncheckedCreateWithoutServiceInput> | ClinicServicesCreateWithoutServiceInput[] | ClinicServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClinicServicesCreateOrConnectWithoutServiceInput | ClinicServicesCreateOrConnectWithoutServiceInput[]
    upsert?: ClinicServicesUpsertWithWhereUniqueWithoutServiceInput | ClinicServicesUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ClinicServicesCreateManyServiceInputEnvelope
    set?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    disconnect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    delete?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    connect?: ClinicServicesWhereUniqueInput | ClinicServicesWhereUniqueInput[]
    update?: ClinicServicesUpdateWithWhereUniqueWithoutServiceInput | ClinicServicesUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ClinicServicesUpdateManyWithWhereWithoutServiceInput | ClinicServicesUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ClinicServicesScalarWhereInput | ClinicServicesScalarWhereInput[]
  }

  export type AppointementCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointementCreateWithoutDoctorInput, AppointementUncheckedCreateWithoutDoctorInput> | AppointementCreateWithoutDoctorInput[] | AppointementUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutDoctorInput | AppointementCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointementCreateManyDoctorInputEnvelope
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
  }

  export type AppointementCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointementCreateWithoutPatientInput, AppointementUncheckedCreateWithoutPatientInput> | AppointementCreateWithoutPatientInput[] | AppointementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutPatientInput | AppointementCreateOrConnectWithoutPatientInput[]
    createMany?: AppointementCreateManyPatientInputEnvelope
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
  }

  export type ClinicCreateNestedOneWithoutUsersInput = {
    create?: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutUsersInput
    connect?: ClinicWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type AppointementUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointementCreateWithoutDoctorInput, AppointementUncheckedCreateWithoutDoctorInput> | AppointementCreateWithoutDoctorInput[] | AppointementUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutDoctorInput | AppointementCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointementCreateManyDoctorInputEnvelope
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
  }

  export type AppointementUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointementCreateWithoutPatientInput, AppointementUncheckedCreateWithoutPatientInput> | AppointementCreateWithoutPatientInput[] | AppointementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutPatientInput | AppointementCreateOrConnectWithoutPatientInput[]
    createMany?: AppointementCreateManyPatientInputEnvelope
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGenderEnumFieldUpdateOperationsInput = {
    set?: $Enums.GenderEnum
  }

  export type AppointementUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointementCreateWithoutDoctorInput, AppointementUncheckedCreateWithoutDoctorInput> | AppointementCreateWithoutDoctorInput[] | AppointementUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutDoctorInput | AppointementCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointementUpsertWithWhereUniqueWithoutDoctorInput | AppointementUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointementCreateManyDoctorInputEnvelope
    set?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    disconnect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    delete?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    update?: AppointementUpdateWithWhereUniqueWithoutDoctorInput | AppointementUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointementUpdateManyWithWhereWithoutDoctorInput | AppointementUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointementScalarWhereInput | AppointementScalarWhereInput[]
  }

  export type AppointementUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointementCreateWithoutPatientInput, AppointementUncheckedCreateWithoutPatientInput> | AppointementCreateWithoutPatientInput[] | AppointementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutPatientInput | AppointementCreateOrConnectWithoutPatientInput[]
    upsert?: AppointementUpsertWithWhereUniqueWithoutPatientInput | AppointementUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointementCreateManyPatientInputEnvelope
    set?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    disconnect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    delete?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    update?: AppointementUpdateWithWhereUniqueWithoutPatientInput | AppointementUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointementUpdateManyWithWhereWithoutPatientInput | AppointementUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointementScalarWhereInput | AppointementScalarWhereInput[]
  }

  export type ClinicUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutUsersInput
    upsert?: ClinicUpsertWithoutUsersInput
    disconnect?: ClinicWhereInput | boolean
    delete?: ClinicWhereInput | boolean
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutUsersInput, ClinicUpdateWithoutUsersInput>, ClinicUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type AppointementUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointementCreateWithoutDoctorInput, AppointementUncheckedCreateWithoutDoctorInput> | AppointementCreateWithoutDoctorInput[] | AppointementUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutDoctorInput | AppointementCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointementUpsertWithWhereUniqueWithoutDoctorInput | AppointementUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointementCreateManyDoctorInputEnvelope
    set?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    disconnect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    delete?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    update?: AppointementUpdateWithWhereUniqueWithoutDoctorInput | AppointementUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointementUpdateManyWithWhereWithoutDoctorInput | AppointementUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointementScalarWhereInput | AppointementScalarWhereInput[]
  }

  export type AppointementUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointementCreateWithoutPatientInput, AppointementUncheckedCreateWithoutPatientInput> | AppointementCreateWithoutPatientInput[] | AppointementUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointementCreateOrConnectWithoutPatientInput | AppointementCreateOrConnectWithoutPatientInput[]
    upsert?: AppointementUpsertWithWhereUniqueWithoutPatientInput | AppointementUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointementCreateManyPatientInputEnvelope
    set?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    disconnect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    delete?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    connect?: AppointementWhereUniqueInput | AppointementWhereUniqueInput[]
    update?: AppointementUpdateWithWhereUniqueWithoutPatientInput | AppointementUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointementUpdateManyWithWhereWithoutPatientInput | AppointementUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointementScalarWhereInput | AppointementScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumFilter<$PrismaModel> | $Enums.RoleEnum
  }

  export type NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.RoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumRoleEnumFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderEnumFilter<$PrismaModel> | $Enums.GenderEnum
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderEnumWithAggregatesFilter<$PrismaModel> | $Enums.GenderEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderEnumFilter<$PrismaModel>
    _max?: NestedEnumGenderEnumFilter<$PrismaModel>
  }

  export type PerscriptionCreateWithoutAppointementInput = {
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PerscriptionUncheckedCreateWithoutAppointementInput = {
    id?: number
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PerscriptionCreateOrConnectWithoutAppointementInput = {
    where: PerscriptionWhereUniqueInput
    create: XOR<PerscriptionCreateWithoutAppointementInput, PerscriptionUncheckedCreateWithoutAppointementInput>
  }

  export type PerscriptionCreateManyAppointementInputEnvelope = {
    data: PerscriptionCreateManyAppointementInput | PerscriptionCreateManyAppointementInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutAppointmentInput = {
    price: number
    discount?: number
    text: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoiceUncheckedCreateWithoutAppointmentInput = {
    id?: number
    price: number
    discount?: number
    text: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutAppointmentInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput>
  }

  export type UserCreateWithoutAppointement_as_doctorInput = {
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    appointement_as_patient?: AppointementCreateNestedManyWithoutPatientInput
    clinic?: ClinicCreateNestedOneWithoutUsersInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAppointement_as_doctorInput = {
    id?: number
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    role_id: number
    clinic_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    appointement_as_patient?: AppointementUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutAppointement_as_doctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointement_as_doctorInput, UserUncheckedCreateWithoutAppointement_as_doctorInput>
  }

  export type UserCreateWithoutAppointement_as_patientInput = {
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    appointement_as_doctor?: AppointementCreateNestedManyWithoutDoctorInput
    clinic?: ClinicCreateNestedOneWithoutUsersInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAppointement_as_patientInput = {
    id?: number
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    role_id: number
    clinic_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    appointement_as_doctor?: AppointementUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutAppointement_as_patientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointement_as_patientInput, UserUncheckedCreateWithoutAppointement_as_patientInput>
  }

  export type ClinicCreateWithoutAppointementsInput = {
    name: string
    rooms_number: number
    receptionist_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    services?: ClinicServicesCreateNestedManyWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutAppointementsInput = {
    id?: number
    name: string
    rooms_number: number
    receptionist_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    services?: ClinicServicesUncheckedCreateNestedManyWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutAppointementsInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutAppointementsInput, ClinicUncheckedCreateWithoutAppointementsInput>
  }

  export type PerscriptionUpsertWithWhereUniqueWithoutAppointementInput = {
    where: PerscriptionWhereUniqueInput
    update: XOR<PerscriptionUpdateWithoutAppointementInput, PerscriptionUncheckedUpdateWithoutAppointementInput>
    create: XOR<PerscriptionCreateWithoutAppointementInput, PerscriptionUncheckedCreateWithoutAppointementInput>
  }

  export type PerscriptionUpdateWithWhereUniqueWithoutAppointementInput = {
    where: PerscriptionWhereUniqueInput
    data: XOR<PerscriptionUpdateWithoutAppointementInput, PerscriptionUncheckedUpdateWithoutAppointementInput>
  }

  export type PerscriptionUpdateManyWithWhereWithoutAppointementInput = {
    where: PerscriptionScalarWhereInput
    data: XOR<PerscriptionUpdateManyMutationInput, PerscriptionUncheckedUpdateManyWithoutAppointementInput>
  }

  export type PerscriptionScalarWhereInput = {
    AND?: PerscriptionScalarWhereInput | PerscriptionScalarWhereInput[]
    OR?: PerscriptionScalarWhereInput[]
    NOT?: PerscriptionScalarWhereInput | PerscriptionScalarWhereInput[]
    id?: IntFilter<"Perscription"> | number
    title?: StringFilter<"Perscription"> | string
    description?: StringFilter<"Perscription"> | string
    appointement_id?: IntFilter<"Perscription"> | number
    created_at?: DateTimeFilter<"Perscription"> | Date | string
    updated_at?: DateTimeFilter<"Perscription"> | Date | string
  }

  export type InvoiceUpsertWithoutAppointmentInput = {
    update: XOR<InvoiceUpdateWithoutAppointmentInput, InvoiceUncheckedUpdateWithoutAppointmentInput>
    create: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutAppointmentInput, InvoiceUncheckedUpdateWithoutAppointmentInput>
  }

  export type InvoiceUpdateWithoutAppointmentInput = {
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAppointement_as_doctorInput = {
    update: XOR<UserUpdateWithoutAppointement_as_doctorInput, UserUncheckedUpdateWithoutAppointement_as_doctorInput>
    create: XOR<UserCreateWithoutAppointement_as_doctorInput, UserUncheckedCreateWithoutAppointement_as_doctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointement_as_doctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointement_as_doctorInput, UserUncheckedUpdateWithoutAppointement_as_doctorInput>
  }

  export type UserUpdateWithoutAppointement_as_doctorInput = {
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointement_as_patient?: AppointementUpdateManyWithoutPatientNestedInput
    clinic?: ClinicUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointement_as_doctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointement_as_patient?: AppointementUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutAppointement_as_patientInput = {
    update: XOR<UserUpdateWithoutAppointement_as_patientInput, UserUncheckedUpdateWithoutAppointement_as_patientInput>
    create: XOR<UserCreateWithoutAppointement_as_patientInput, UserUncheckedCreateWithoutAppointement_as_patientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointement_as_patientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointement_as_patientInput, UserUncheckedUpdateWithoutAppointement_as_patientInput>
  }

  export type UserUpdateWithoutAppointement_as_patientInput = {
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointement_as_doctor?: AppointementUpdateManyWithoutDoctorNestedInput
    clinic?: ClinicUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointement_as_patientInput = {
    id?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointement_as_doctor?: AppointementUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type ClinicUpsertWithoutAppointementsInput = {
    update: XOR<ClinicUpdateWithoutAppointementsInput, ClinicUncheckedUpdateWithoutAppointementsInput>
    create: XOR<ClinicCreateWithoutAppointementsInput, ClinicUncheckedCreateWithoutAppointementsInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutAppointementsInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutAppointementsInput, ClinicUncheckedUpdateWithoutAppointementsInput>
  }

  export type ClinicUpdateWithoutAppointementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    rooms_number?: IntFieldUpdateOperationsInput | number
    receptionist_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ClinicServicesUpdateManyWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutAppointementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rooms_number?: IntFieldUpdateOperationsInput | number
    receptionist_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ClinicServicesUncheckedUpdateManyWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ClinicServicesCreateWithoutClinicInput = {
    created_at?: Date | string
    updated_at?: Date | string
    service: ServiceCreateNestedOneWithoutClinicsInput
  }

  export type ClinicServicesUncheckedCreateWithoutClinicInput = {
    id?: number
    service_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClinicServicesCreateOrConnectWithoutClinicInput = {
    where: ClinicServicesWhereUniqueInput
    create: XOR<ClinicServicesCreateWithoutClinicInput, ClinicServicesUncheckedCreateWithoutClinicInput>
  }

  export type ClinicServicesCreateManyClinicInputEnvelope = {
    data: ClinicServicesCreateManyClinicInput | ClinicServicesCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type AppointementCreateWithoutClinicInput = {
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    perscriptions?: PerscriptionCreateNestedManyWithoutAppointementInput
    invoice?: InvoiceCreateNestedOneWithoutAppointmentInput
    doctor: UserCreateNestedOneWithoutAppointement_as_doctorInput
    patient: UserCreateNestedOneWithoutAppointement_as_patientInput
  }

  export type AppointementUncheckedCreateWithoutClinicInput = {
    id?: number
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    doctor_id: number
    patient_id: number
    created_at?: Date | string
    updated_at?: Date | string
    perscriptions?: PerscriptionUncheckedCreateNestedManyWithoutAppointementInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointementCreateOrConnectWithoutClinicInput = {
    where: AppointementWhereUniqueInput
    create: XOR<AppointementCreateWithoutClinicInput, AppointementUncheckedCreateWithoutClinicInput>
  }

  export type AppointementCreateManyClinicInputEnvelope = {
    data: AppointementCreateManyClinicInput | AppointementCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutClinicInput = {
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    appointement_as_doctor?: AppointementCreateNestedManyWithoutDoctorInput
    appointement_as_patient?: AppointementCreateNestedManyWithoutPatientInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutClinicInput = {
    id?: number
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    appointement_as_doctor?: AppointementUncheckedCreateNestedManyWithoutDoctorInput
    appointement_as_patient?: AppointementUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutClinicInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput>
  }

  export type UserCreateManyClinicInputEnvelope = {
    data: UserCreateManyClinicInput | UserCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type ClinicServicesUpsertWithWhereUniqueWithoutClinicInput = {
    where: ClinicServicesWhereUniqueInput
    update: XOR<ClinicServicesUpdateWithoutClinicInput, ClinicServicesUncheckedUpdateWithoutClinicInput>
    create: XOR<ClinicServicesCreateWithoutClinicInput, ClinicServicesUncheckedCreateWithoutClinicInput>
  }

  export type ClinicServicesUpdateWithWhereUniqueWithoutClinicInput = {
    where: ClinicServicesWhereUniqueInput
    data: XOR<ClinicServicesUpdateWithoutClinicInput, ClinicServicesUncheckedUpdateWithoutClinicInput>
  }

  export type ClinicServicesUpdateManyWithWhereWithoutClinicInput = {
    where: ClinicServicesScalarWhereInput
    data: XOR<ClinicServicesUpdateManyMutationInput, ClinicServicesUncheckedUpdateManyWithoutClinicInput>
  }

  export type ClinicServicesScalarWhereInput = {
    AND?: ClinicServicesScalarWhereInput | ClinicServicesScalarWhereInput[]
    OR?: ClinicServicesScalarWhereInput[]
    NOT?: ClinicServicesScalarWhereInput | ClinicServicesScalarWhereInput[]
    id?: IntFilter<"ClinicServices"> | number
    clinic_id?: IntFilter<"ClinicServices"> | number
    service_id?: IntFilter<"ClinicServices"> | number
    created_at?: DateTimeFilter<"ClinicServices"> | Date | string
    updated_at?: DateTimeFilter<"ClinicServices"> | Date | string
  }

  export type AppointementUpsertWithWhereUniqueWithoutClinicInput = {
    where: AppointementWhereUniqueInput
    update: XOR<AppointementUpdateWithoutClinicInput, AppointementUncheckedUpdateWithoutClinicInput>
    create: XOR<AppointementCreateWithoutClinicInput, AppointementUncheckedCreateWithoutClinicInput>
  }

  export type AppointementUpdateWithWhereUniqueWithoutClinicInput = {
    where: AppointementWhereUniqueInput
    data: XOR<AppointementUpdateWithoutClinicInput, AppointementUncheckedUpdateWithoutClinicInput>
  }

  export type AppointementUpdateManyWithWhereWithoutClinicInput = {
    where: AppointementScalarWhereInput
    data: XOR<AppointementUpdateManyMutationInput, AppointementUncheckedUpdateManyWithoutClinicInput>
  }

  export type AppointementScalarWhereInput = {
    AND?: AppointementScalarWhereInput | AppointementScalarWhereInput[]
    OR?: AppointementScalarWhereInput[]
    NOT?: AppointementScalarWhereInput | AppointementScalarWhereInput[]
    id?: IntFilter<"Appointement"> | number
    date?: DateTimeFilter<"Appointement"> | Date | string
    subject?: StringFilter<"Appointement"> | string
    description?: StringFilter<"Appointement"> | string
    is_canceled?: BoolFilter<"Appointement"> | boolean
    doctor_id?: IntFilter<"Appointement"> | number
    patient_id?: IntFilter<"Appointement"> | number
    clinic_id?: IntFilter<"Appointement"> | number
    created_at?: DateTimeFilter<"Appointement"> | Date | string
    updated_at?: DateTimeFilter<"Appointement"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutClinicInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClinicInput, UserUncheckedUpdateWithoutClinicInput>
    create: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClinicInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClinicInput, UserUncheckedUpdateWithoutClinicInput>
  }

  export type UserUpdateManyWithWhereWithoutClinicInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClinicInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    picture?: StringNullableFilter<"User"> | string | null
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    gender?: EnumGenderEnumFilter<"User"> | $Enums.GenderEnum
    password?: StringFilter<"User"> | string
    access_token?: StringFilter<"User"> | string
    phone_number?: StringNullableFilter<"User"> | string | null
    doctor_speciality?: StringNullableFilter<"User"> | string | null
    role_id?: IntFilter<"User"> | number
    clinic_id?: IntNullableFilter<"User"> | number | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type ClinicCreateWithoutServicesInput = {
    name: string
    rooms_number: number
    receptionist_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    appointements?: AppointementCreateNestedManyWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutServicesInput = {
    id?: number
    name: string
    rooms_number: number
    receptionist_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    appointements?: AppointementUncheckedCreateNestedManyWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutServicesInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutServicesInput, ClinicUncheckedCreateWithoutServicesInput>
  }

  export type ServiceCreateWithoutClinicsInput = {
    name: string
    description: string
    cost: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServiceUncheckedCreateWithoutClinicsInput = {
    id?: number
    name: string
    description: string
    cost: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServiceCreateOrConnectWithoutClinicsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutClinicsInput, ServiceUncheckedCreateWithoutClinicsInput>
  }

  export type ClinicUpsertWithoutServicesInput = {
    update: XOR<ClinicUpdateWithoutServicesInput, ClinicUncheckedUpdateWithoutServicesInput>
    create: XOR<ClinicCreateWithoutServicesInput, ClinicUncheckedCreateWithoutServicesInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutServicesInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutServicesInput, ClinicUncheckedUpdateWithoutServicesInput>
  }

  export type ClinicUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    rooms_number?: IntFieldUpdateOperationsInput | number
    receptionist_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointements?: AppointementUpdateManyWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rooms_number?: IntFieldUpdateOperationsInput | number
    receptionist_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointements?: AppointementUncheckedUpdateManyWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ServiceUpsertWithoutClinicsInput = {
    update: XOR<ServiceUpdateWithoutClinicsInput, ServiceUncheckedUpdateWithoutClinicsInput>
    create: XOR<ServiceCreateWithoutClinicsInput, ServiceUncheckedCreateWithoutClinicsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutClinicsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutClinicsInput, ServiceUncheckedUpdateWithoutClinicsInput>
  }

  export type ServiceUpdateWithoutClinicsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateWithoutClinicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointementCreateWithoutInvoiceInput = {
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    perscriptions?: PerscriptionCreateNestedManyWithoutAppointementInput
    doctor: UserCreateNestedOneWithoutAppointement_as_doctorInput
    patient: UserCreateNestedOneWithoutAppointement_as_patientInput
    clinic: ClinicCreateNestedOneWithoutAppointementsInput
  }

  export type AppointementUncheckedCreateWithoutInvoiceInput = {
    id?: number
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    doctor_id: number
    patient_id: number
    clinic_id: number
    created_at?: Date | string
    updated_at?: Date | string
    perscriptions?: PerscriptionUncheckedCreateNestedManyWithoutAppointementInput
  }

  export type AppointementCreateOrConnectWithoutInvoiceInput = {
    where: AppointementWhereUniqueInput
    create: XOR<AppointementCreateWithoutInvoiceInput, AppointementUncheckedCreateWithoutInvoiceInput>
  }

  export type AppointementUpsertWithoutInvoiceInput = {
    update: XOR<AppointementUpdateWithoutInvoiceInput, AppointementUncheckedUpdateWithoutInvoiceInput>
    create: XOR<AppointementCreateWithoutInvoiceInput, AppointementUncheckedCreateWithoutInvoiceInput>
    where?: AppointementWhereInput
  }

  export type AppointementUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: AppointementWhereInput
    data: XOR<AppointementUpdateWithoutInvoiceInput, AppointementUncheckedUpdateWithoutInvoiceInput>
  }

  export type AppointementUpdateWithoutInvoiceInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    perscriptions?: PerscriptionUpdateManyWithoutAppointementNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppointement_as_doctorNestedInput
    patient?: UserUpdateOneRequiredWithoutAppointement_as_patientNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutAppointementsNestedInput
  }

  export type AppointementUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    doctor_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    perscriptions?: PerscriptionUncheckedUpdateManyWithoutAppointementNestedInput
  }

  export type AppointementCreateWithoutPerscriptionsInput = {
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    invoice?: InvoiceCreateNestedOneWithoutAppointmentInput
    doctor: UserCreateNestedOneWithoutAppointement_as_doctorInput
    patient: UserCreateNestedOneWithoutAppointement_as_patientInput
    clinic: ClinicCreateNestedOneWithoutAppointementsInput
  }

  export type AppointementUncheckedCreateWithoutPerscriptionsInput = {
    id?: number
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    doctor_id: number
    patient_id: number
    clinic_id: number
    created_at?: Date | string
    updated_at?: Date | string
    invoice?: InvoiceUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointementCreateOrConnectWithoutPerscriptionsInput = {
    where: AppointementWhereUniqueInput
    create: XOR<AppointementCreateWithoutPerscriptionsInput, AppointementUncheckedCreateWithoutPerscriptionsInput>
  }

  export type AppointementUpsertWithoutPerscriptionsInput = {
    update: XOR<AppointementUpdateWithoutPerscriptionsInput, AppointementUncheckedUpdateWithoutPerscriptionsInput>
    create: XOR<AppointementCreateWithoutPerscriptionsInput, AppointementUncheckedCreateWithoutPerscriptionsInput>
    where?: AppointementWhereInput
  }

  export type AppointementUpdateToOneWithWhereWithoutPerscriptionsInput = {
    where?: AppointementWhereInput
    data: XOR<AppointementUpdateWithoutPerscriptionsInput, AppointementUncheckedUpdateWithoutPerscriptionsInput>
  }

  export type AppointementUpdateWithoutPerscriptionsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneWithoutAppointmentNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppointement_as_doctorNestedInput
    patient?: UserUpdateOneRequiredWithoutAppointement_as_patientNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutAppointementsNestedInput
  }

  export type AppointementUncheckedUpdateWithoutPerscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    doctor_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type UserCreateWithoutRoleInput = {
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    appointement_as_doctor?: AppointementCreateNestedManyWithoutDoctorInput
    appointement_as_patient?: AppointementCreateNestedManyWithoutPatientInput
    clinic?: ClinicCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    clinic_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    appointement_as_doctor?: AppointementUncheckedCreateNestedManyWithoutDoctorInput
    appointement_as_patient?: AppointementUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type ClinicServicesCreateWithoutServiceInput = {
    created_at?: Date | string
    updated_at?: Date | string
    clinic: ClinicCreateNestedOneWithoutServicesInput
  }

  export type ClinicServicesUncheckedCreateWithoutServiceInput = {
    id?: number
    clinic_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClinicServicesCreateOrConnectWithoutServiceInput = {
    where: ClinicServicesWhereUniqueInput
    create: XOR<ClinicServicesCreateWithoutServiceInput, ClinicServicesUncheckedCreateWithoutServiceInput>
  }

  export type ClinicServicesCreateManyServiceInputEnvelope = {
    data: ClinicServicesCreateManyServiceInput | ClinicServicesCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ClinicServicesUpsertWithWhereUniqueWithoutServiceInput = {
    where: ClinicServicesWhereUniqueInput
    update: XOR<ClinicServicesUpdateWithoutServiceInput, ClinicServicesUncheckedUpdateWithoutServiceInput>
    create: XOR<ClinicServicesCreateWithoutServiceInput, ClinicServicesUncheckedCreateWithoutServiceInput>
  }

  export type ClinicServicesUpdateWithWhereUniqueWithoutServiceInput = {
    where: ClinicServicesWhereUniqueInput
    data: XOR<ClinicServicesUpdateWithoutServiceInput, ClinicServicesUncheckedUpdateWithoutServiceInput>
  }

  export type ClinicServicesUpdateManyWithWhereWithoutServiceInput = {
    where: ClinicServicesScalarWhereInput
    data: XOR<ClinicServicesUpdateManyMutationInput, ClinicServicesUncheckedUpdateManyWithoutServiceInput>
  }

  export type AppointementCreateWithoutDoctorInput = {
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    perscriptions?: PerscriptionCreateNestedManyWithoutAppointementInput
    invoice?: InvoiceCreateNestedOneWithoutAppointmentInput
    patient: UserCreateNestedOneWithoutAppointement_as_patientInput
    clinic: ClinicCreateNestedOneWithoutAppointementsInput
  }

  export type AppointementUncheckedCreateWithoutDoctorInput = {
    id?: number
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    patient_id: number
    clinic_id: number
    created_at?: Date | string
    updated_at?: Date | string
    perscriptions?: PerscriptionUncheckedCreateNestedManyWithoutAppointementInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointementCreateOrConnectWithoutDoctorInput = {
    where: AppointementWhereUniqueInput
    create: XOR<AppointementCreateWithoutDoctorInput, AppointementUncheckedCreateWithoutDoctorInput>
  }

  export type AppointementCreateManyDoctorInputEnvelope = {
    data: AppointementCreateManyDoctorInput | AppointementCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointementCreateWithoutPatientInput = {
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    perscriptions?: PerscriptionCreateNestedManyWithoutAppointementInput
    invoice?: InvoiceCreateNestedOneWithoutAppointmentInput
    doctor: UserCreateNestedOneWithoutAppointement_as_doctorInput
    clinic: ClinicCreateNestedOneWithoutAppointementsInput
  }

  export type AppointementUncheckedCreateWithoutPatientInput = {
    id?: number
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    doctor_id: number
    clinic_id: number
    created_at?: Date | string
    updated_at?: Date | string
    perscriptions?: PerscriptionUncheckedCreateNestedManyWithoutAppointementInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointementCreateOrConnectWithoutPatientInput = {
    where: AppointementWhereUniqueInput
    create: XOR<AppointementCreateWithoutPatientInput, AppointementUncheckedCreateWithoutPatientInput>
  }

  export type AppointementCreateManyPatientInputEnvelope = {
    data: AppointementCreateManyPatientInput | AppointementCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ClinicCreateWithoutUsersInput = {
    name: string
    rooms_number: number
    receptionist_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    services?: ClinicServicesCreateNestedManyWithoutClinicInput
    appointements?: AppointementCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    rooms_number: number
    receptionist_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    services?: ClinicServicesUncheckedCreateNestedManyWithoutClinicInput
    appointements?: AppointementUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutUsersInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
  }

  export type RoleCreateWithoutUsersInput = {
    name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type AppointementUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointementWhereUniqueInput
    update: XOR<AppointementUpdateWithoutDoctorInput, AppointementUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointementCreateWithoutDoctorInput, AppointementUncheckedCreateWithoutDoctorInput>
  }

  export type AppointementUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointementWhereUniqueInput
    data: XOR<AppointementUpdateWithoutDoctorInput, AppointementUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointementUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointementScalarWhereInput
    data: XOR<AppointementUpdateManyMutationInput, AppointementUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AppointementUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointementWhereUniqueInput
    update: XOR<AppointementUpdateWithoutPatientInput, AppointementUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointementCreateWithoutPatientInput, AppointementUncheckedCreateWithoutPatientInput>
  }

  export type AppointementUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointementWhereUniqueInput
    data: XOR<AppointementUpdateWithoutPatientInput, AppointementUncheckedUpdateWithoutPatientInput>
  }

  export type AppointementUpdateManyWithWhereWithoutPatientInput = {
    where: AppointementScalarWhereInput
    data: XOR<AppointementUpdateManyMutationInput, AppointementUncheckedUpdateManyWithoutPatientInput>
  }

  export type ClinicUpsertWithoutUsersInput = {
    update: XOR<ClinicUpdateWithoutUsersInput, ClinicUncheckedUpdateWithoutUsersInput>
    create: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutUsersInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutUsersInput, ClinicUncheckedUpdateWithoutUsersInput>
  }

  export type ClinicUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    rooms_number?: IntFieldUpdateOperationsInput | number
    receptionist_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ClinicServicesUpdateManyWithoutClinicNestedInput
    appointements?: AppointementUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rooms_number?: IntFieldUpdateOperationsInput | number
    receptionist_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ClinicServicesUncheckedUpdateManyWithoutClinicNestedInput
    appointements?: AppointementUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerscriptionCreateManyAppointementInput = {
    id?: number
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PerscriptionUpdateWithoutAppointementInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerscriptionUncheckedUpdateWithoutAppointementInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerscriptionUncheckedUpdateManyWithoutAppointementInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicServicesCreateManyClinicInput = {
    id?: number
    service_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointementCreateManyClinicInput = {
    id?: number
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    doctor_id: number
    patient_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateManyClinicInput = {
    id?: number
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClinicServicesUpdateWithoutClinicInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutClinicsNestedInput
  }

  export type ClinicServicesUncheckedUpdateWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicServicesUncheckedUpdateManyWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointementUpdateWithoutClinicInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    perscriptions?: PerscriptionUpdateManyWithoutAppointementNestedInput
    invoice?: InvoiceUpdateOneWithoutAppointmentNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppointement_as_doctorNestedInput
    patient?: UserUpdateOneRequiredWithoutAppointement_as_patientNestedInput
  }

  export type AppointementUncheckedUpdateWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    doctor_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    perscriptions?: PerscriptionUncheckedUpdateManyWithoutAppointementNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointementUncheckedUpdateManyWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    doctor_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutClinicInput = {
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointement_as_doctor?: AppointementUpdateManyWithoutDoctorNestedInput
    appointement_as_patient?: AppointementUpdateManyWithoutPatientNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointement_as_doctor?: AppointementUncheckedUpdateManyWithoutDoctorNestedInput
    appointement_as_patient?: AppointementUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClinicInput = {
    id?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: number
    picture?: string | null
    firstname: string
    lastname: string
    email: string
    gender?: $Enums.GenderEnum
    password: string
    access_token: string
    phone_number?: string | null
    doctor_speciality?: string | null
    clinic_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointement_as_doctor?: AppointementUpdateManyWithoutDoctorNestedInput
    appointement_as_patient?: AppointementUpdateManyWithoutPatientNestedInput
    clinic?: ClinicUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    clinic_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointement_as_doctor?: AppointementUncheckedUpdateManyWithoutDoctorNestedInput
    appointement_as_patient?: AppointementUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_speciality?: NullableStringFieldUpdateOperationsInput | string | null
    clinic_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicServicesCreateManyServiceInput = {
    id?: number
    clinic_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClinicServicesUpdateWithoutServiceInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ClinicServicesUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicServicesUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointementCreateManyDoctorInput = {
    id?: number
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    patient_id: number
    clinic_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointementCreateManyPatientInput = {
    id?: number
    date: Date | string
    subject: string
    description: string
    is_canceled?: boolean
    doctor_id: number
    clinic_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointementUpdateWithoutDoctorInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    perscriptions?: PerscriptionUpdateManyWithoutAppointementNestedInput
    invoice?: InvoiceUpdateOneWithoutAppointmentNestedInput
    patient?: UserUpdateOneRequiredWithoutAppointement_as_patientNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutAppointementsNestedInput
  }

  export type AppointementUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    patient_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    perscriptions?: PerscriptionUncheckedUpdateManyWithoutAppointementNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointementUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    patient_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointementUpdateWithoutPatientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    perscriptions?: PerscriptionUpdateManyWithoutAppointementNestedInput
    invoice?: InvoiceUpdateOneWithoutAppointmentNestedInput
    doctor?: UserUpdateOneRequiredWithoutAppointement_as_doctorNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutAppointementsNestedInput
  }

  export type AppointementUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    doctor_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    perscriptions?: PerscriptionUncheckedUpdateManyWithoutAppointementNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointementUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_canceled?: BoolFieldUpdateOperationsInput | boolean
    doctor_id?: IntFieldUpdateOperationsInput | number
    clinic_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}