import Button from './Button';

const Buttonwrapper = ({setColor}) => {
    return(
        <>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex glex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                      <Button backgroundColor="red" setColor={setColor}  />
                      <Button backgroundColor="green" setColor={setColor}  />
                      <Button backgroundColor="blue" setColor={setColor}  />
                      <Button backgroundColor="gray" setColor={setColor}  />
                      <Button backgroundColor="yellow" setColor={setColor} btnTextColor="black" />
                      <Button backgroundColor="olive" setColor={setColor}  />
                      <Button backgroundColor="pink" setColor={setColor} btnTextColor="black" />
                      <Button backgroundColor="purple" setColor={setColor}  />
                      <Button backgroundColor="lavender" setColor={setColor} btnTextColor="black" />
                      <Button backgroundColor="black" setColor={setColor}  />
                  </div>
            </div>
        </>
    );
};

export default Buttonwrapper;