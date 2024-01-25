
# package.json 
package.json is a configuration for npm

// Start installing our dependenci

# Most important dependent packages is bundler (webpack, parcel, vite) 

There are two type of dependecies 1. dependency 2. devDipendency

# devDipendeci
 Is uses in devlopement 

# dipendeci is useful producrtion also

#  "parcel": "^2.11.0"  => ^ is know as caret 
What is difference in tilde(~) and caret(^)
~ ---> it will accept upgrad patch Version of package. Approximately equivalent to version, i.e., only accept new patch versions
^ --> it will accept upgrad minor version of pacakge. Approximately equivalent to version, i.e., only accept new patch versions 


# What is package.lock.json,  package.lock.json vs package.json
package.lock.json file keep a record  of exact track of version package version.


# What is integrity
The "integrity" field is a security feature that helps ensure the integrity of the installed packages.

The integrity field contains a hash value based on the content of the installed package. This hash is used to verify that the package you are installing or already have installed matches the original package that was published to the npm registry.

# What is node_modules 
Node modules is a collection dependencies. It like a database, actual code is there, it huse


# Start The Server with parcel
npx parcel index.html

npx --> Exucition the package

# Why use instlling react compare with CDN
Keep changeing the version autometically and it is locally available in node_modules 

Use with CDN takes network call and con't update versions change easyly

 
# parcel  -  parceljs.org
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - writtenin c++
- Caching - Faster Builds
- Image Optimization 
- Minification 
- Bundling
- Compress
- Consistent Hashing
- Code Spliting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code 
- Different dev and prod bundles


# Prod Build
- npx parcel prod index.html  -> If you can get error @ in package.josn remove -  "main": "App.js",


# Browserlist
- https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z










