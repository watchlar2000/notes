let val: object = { status: 'ok' };
// val = null; // null is not an object
// val = undefined; // undefined is not an object
val = () => {}; // function works which is strange

// You can use the type {} in combination with the intersection type operator & to remove nullability from another type

type NullableStringOrNumber = string | number | null | undefined;
type StringOrNumber = NullableStringOrNumber & {}; // string | number
