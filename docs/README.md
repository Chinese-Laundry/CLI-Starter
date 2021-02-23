> The official command line utility for chinese laundry. It implements a small scale, MVC-ish structure, or at least
> encourages members of the development team to utilize the MVC API that's available.

![Screenshot](docs/screenshot.png)

## How to use
1. Create a controller. It **_must_** reside in the `src/controllers` directory,
   and it **_must_** contain a `run()` method. The `run()` method will be executed
   automatically when using the `controller()` helper function, as seen in step 2.
```js
// src/controllers/customers
module.exports = {
    run() {
        // The code up here is totally doing things. A lot of unknown things ...
        // ... doing things that'll return the following array, for example
        return [
            'jason',
            'sean',
            'cassandra',
            'alex',
            'steven',
            'bob',
            'sally',
            'virginia',
        ]
    }
}
```

2. create a new command inside `src/configuration/commands`, like so:
```js
program
    .command('customer')
    .alias('c')
    .description('generates a new customer report')
    .action(() => {
        controller('customers')
            // Let's pass data from the controller to the promise chain!
            .then((response) => {
                console.log(response)
            })
            .then(() => {
                console.log(
                    'This portion of the promise chain works too, by the way!'
                )
            })
            .catch((error) => console.error(error))
    })
```

3. Call your command
```bash
$ laundry-cli [options] customer
```

4. Results
   ![Screenshot2](docs/screenshot-2.png)

## License
### BSD 3-Clause License

Copyright (c) 2021, Jason Napolitano
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
