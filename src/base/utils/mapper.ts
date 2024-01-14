export abstract class IMapper<I, O> {
  abstract mapFrom(data: I): O;
  abstract mapTo(data: O): I;
}
