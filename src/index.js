const types = {
	// on all versions
	minmax: [0, undefined],
	types: {
		Address: 'MultiAddress',
		LookupSource: 'MultiAddress',
		FractionLength: 'u32',
		RequestInterval: 'u8',
		JsonNumberValue: {
			integer: 'u64',
			fraction: 'u64',
			fraction_length: 'u32',
			exponent: 'u32'
		},
		PricePayloadSubPrice: '(Bytes, u64, FractionLength, JsonNumberValue)',
		PricePayloadSubJumpBlock: "(Bytes, RequestInterval)",
		PricePayload: {
			block_number: 'BlockNumber',
			price: 'Vec<PricePayloadSubPrice>',
			jump_block: 'Vec<PricePayloadSubJumpBlock>',
			public: 'AccountId'
		}
	}
};

module.exports = types;
