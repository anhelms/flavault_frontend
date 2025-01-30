export function RecipesNew(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onCreateRecipe(params, () => event.target.reset());
    };

  return (
    <>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-xl mt-20">
          <h1 className="text-xl font-bold text-black capitalize light:text-black">New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-black light:text-black-200">Title</label>
                        <input name="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md light:bg-white-800 light:text-black-300 light:border-gray-600 focus:border-blue-300 light:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-black light:text-black-200">Chef</label>
                        <input name="chef" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md light:bg-white-800 light:text-black-300 light:border-gray-600 focus:border-blue-300 light:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-black light:text-gray-200">Description</label>
                        <textarea name="description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md light:bg-gray-800 light:text-gray-300 light:border-gray-600 focus:border-blue-300 light:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                    </div>

                    <div>
                        <label className="text-black light:text-gray-200">Ingredients</label>
                        <textarea name="ingredients" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md light:bg-gray-800 light:text-gray-300 light:border-gray-600 focus:border-blue-300 light:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                    </div>

                    <div>
                        <label className="text-black light:text-gray-200">Directions</label>
                        <textarea name="directions" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md light:bg-gray-800 light:text-gray-300 light:border-gray-600 focus:border-blue-300 light:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                    </div>

                    <div className="flex gap-1">
                        <div>
                            <label className="text-black light:text-black-200">Prep Time</label>
                            <input name="prep_time" type="number" className="block px-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md light:bg-white-800 light:text-black-300 light:border-gray-600 focus:border-blue-300 light:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-black light:text-black-200">Servings</label>
                            <input name="servings" type="number" className="block px-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md light:bg-white-800 light:text-black-300 light:border-gray-600 focus:border-blue-300 light:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div>
                        <label className="text-black light:text-black-200">Image Url or Upload</label>

                        <input name="image_url" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md light:bg-white-800 light:text-black-300 light:border-gray-600 focus:border-blue-300 light:focus:border-blue-300 focus:outline-none focus:ring" />

                        <div className="space-y-1 text-center">
                            <div className="flex text-sm text-black-600 m-2">
                                <label className="relative cursor-pointer bg-white border border-black-700 rounded-md font-medium text-blue-800 hover:text-blue-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-800">
                                    <span className="m-2">Upload a file</span>
                                        
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                    <p className="ml-3 text-black">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-6 space-x-5">
                    {/* UPDATE BUTTON NEEDS A TYPE */}
                    {/* <button type="" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-900 focus:outline-none focus:bg-gray-600">Update</button> */}
                    <button type="submit">Save</button>
                </div>
            </form>
        </section>
    </>
  );
}