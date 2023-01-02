import { ConvertToSpacesPipe } from "./convert-to-spaces.pipe"

describe('ConvertToSpacesPipe', () => {
    let pipe: ConvertToSpacesPipe;

    beforeEach(() => {
        pipe = new ConvertToSpacesPipe();
    })

    it('should convert all (-) characters to () characters', ()=> {
        //Arrange
        let message: string = 'DML-056';

        //Act
        let value = pipe.transform(message, '-');

        //Assert
        expect(value).toEqual('DML 056');
    })
})