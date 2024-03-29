/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface PairInterface extends utils.Interface {
  functions: {
    "addBuffer(uint256)": FunctionFragment;
    "base()": FunctionFragment;
    "baseScaleFactor()": FunctionFragment;
    "buffer()": FunctionFragment;
    "burn(address,uint256)": FunctionFragment;
    "factory()": FunctionFragment;
    "lendgine()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "removeBuffer(uint256)": FunctionFragment;
    "reserve0()": FunctionFragment;
    "reserve1()": FunctionFragment;
    "skim(address)": FunctionFragment;
    "speculative()": FunctionFragment;
    "speculativeScaleFactor()": FunctionFragment;
    "swap(address,uint256,uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "upperBound()": FunctionFragment;
    "verifyInvariant(uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBuffer"
      | "base"
      | "baseScaleFactor"
      | "buffer"
      | "burn"
      | "factory"
      | "lendgine"
      | "mint"
      | "removeBuffer"
      | "reserve0"
      | "reserve1"
      | "skim"
      | "speculative"
      | "speculativeScaleFactor"
      | "swap"
      | "totalSupply"
      | "upperBound"
      | "verifyInvariant"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBuffer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "base", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "baseScaleFactor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buffer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "lendgine", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBuffer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "reserve0", values?: undefined): string;
  encodeFunctionData(functionFragment: "reserve1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "skim",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "speculative",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "speculativeScaleFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upperBound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verifyInvariant",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "addBuffer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "base", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "baseScaleFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buffer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lendgine", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeBuffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reserve0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reserve1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "speculative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "speculativeScaleFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upperBound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyInvariant",
    data: BytesLike
  ): Result;

  events: {
    "Burn(address,uint256,uint256,uint256,address)": EventFragment;
    "Mint(address,uint256)": EventFragment;
    "Swap(address,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export interface BurnEventObject {
  sender: string;
  amount0: BigNumber;
  amount1: BigNumber;
  liquidity: BigNumber;
  to: string;
}
export type BurnEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, string],
  BurnEventObject
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface MintEventObject {
  sender: string;
  liquidity: BigNumber;
}
export type MintEvent = TypedEvent<[string, BigNumber], MintEventObject>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface SwapEventObject {
  sender: string;
  amount0Out: BigNumber;
  amount1Out: BigNumber;
  to: string;
}
export type SwapEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface Pair extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PairInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addBuffer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    base(overrides?: CallOverrides): Promise<[string]>;

    baseScaleFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    buffer(overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      to: PromiseOrValue<string>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    lendgine(overrides?: CallOverrides): Promise<[string]>;

    mint(
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeBuffer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reserve0(overrides?: CallOverrides): Promise<[BigNumber]>;

    reserve1(overrides?: CallOverrides): Promise<[BigNumber]>;

    skim(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    speculative(overrides?: CallOverrides): Promise<[string]>;

    speculativeScaleFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    swap(
      to: PromiseOrValue<string>,
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    upperBound(overrides?: CallOverrides): Promise<[BigNumber]>;

    verifyInvariant(
      r0: PromiseOrValue<BigNumberish>,
      r1: PromiseOrValue<BigNumberish>,
      shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { valid: boolean }>;
  };

  addBuffer(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  base(overrides?: CallOverrides): Promise<string>;

  baseScaleFactor(overrides?: CallOverrides): Promise<BigNumber>;

  buffer(overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    to: PromiseOrValue<string>,
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  lendgine(overrides?: CallOverrides): Promise<string>;

  mint(
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeBuffer(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reserve0(overrides?: CallOverrides): Promise<BigNumber>;

  reserve1(overrides?: CallOverrides): Promise<BigNumber>;

  skim(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  speculative(overrides?: CallOverrides): Promise<string>;

  speculativeScaleFactor(overrides?: CallOverrides): Promise<BigNumber>;

  swap(
    to: PromiseOrValue<string>,
    amount0Out: PromiseOrValue<BigNumberish>,
    amount1Out: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  upperBound(overrides?: CallOverrides): Promise<BigNumber>;

  verifyInvariant(
    r0: PromiseOrValue<BigNumberish>,
    r1: PromiseOrValue<BigNumberish>,
    shares: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addBuffer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    base(overrides?: CallOverrides): Promise<string>;

    baseScaleFactor(overrides?: CallOverrides): Promise<BigNumber>;

    buffer(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      to: PromiseOrValue<string>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    factory(overrides?: CallOverrides): Promise<string>;

    lendgine(overrides?: CallOverrides): Promise<string>;

    mint(
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeBuffer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    reserve0(overrides?: CallOverrides): Promise<BigNumber>;

    reserve1(overrides?: CallOverrides): Promise<BigNumber>;

    skim(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    speculative(overrides?: CallOverrides): Promise<string>;

    speculativeScaleFactor(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      to: PromiseOrValue<string>,
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    upperBound(overrides?: CallOverrides): Promise<BigNumber>;

    verifyInvariant(
      r0: PromiseOrValue<BigNumberish>,
      r1: PromiseOrValue<BigNumberish>,
      shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Burn(address,uint256,uint256,uint256,address)"(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null,
      liquidity?: null,
      to?: PromiseOrValue<string> | null
    ): BurnEventFilter;
    Burn(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null,
      liquidity?: null,
      to?: PromiseOrValue<string> | null
    ): BurnEventFilter;

    "Mint(address,uint256)"(
      sender?: PromiseOrValue<string> | null,
      liquidity?: null
    ): MintEventFilter;
    Mint(
      sender?: PromiseOrValue<string> | null,
      liquidity?: null
    ): MintEventFilter;

    "Swap(address,uint256,uint256,address)"(
      sender?: PromiseOrValue<string> | null,
      amount0Out?: null,
      amount1Out?: null,
      to?: PromiseOrValue<string> | null
    ): SwapEventFilter;
    Swap(
      sender?: PromiseOrValue<string> | null,
      amount0Out?: null,
      amount1Out?: null,
      to?: PromiseOrValue<string> | null
    ): SwapEventFilter;
  };

  estimateGas: {
    addBuffer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    base(overrides?: CallOverrides): Promise<BigNumber>;

    baseScaleFactor(overrides?: CallOverrides): Promise<BigNumber>;

    buffer(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      to: PromiseOrValue<string>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    lendgine(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeBuffer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reserve0(overrides?: CallOverrides): Promise<BigNumber>;

    reserve1(overrides?: CallOverrides): Promise<BigNumber>;

    skim(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    speculative(overrides?: CallOverrides): Promise<BigNumber>;

    speculativeScaleFactor(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      to: PromiseOrValue<string>,
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    upperBound(overrides?: CallOverrides): Promise<BigNumber>;

    verifyInvariant(
      r0: PromiseOrValue<BigNumberish>,
      r1: PromiseOrValue<BigNumberish>,
      shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBuffer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    base(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseScaleFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buffer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      to: PromiseOrValue<string>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lendgine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeBuffer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reserve0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reserve1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    skim(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    speculative(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    speculativeScaleFactor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      to: PromiseOrValue<string>,
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    upperBound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifyInvariant(
      r0: PromiseOrValue<BigNumberish>,
      r1: PromiseOrValue<BigNumberish>,
      shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
