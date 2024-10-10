cmake_minimum_required(VERSION 3.5.0)
project(cpp-workshop-ioannina VERSION 0.1.0)

# Add all the necessary source files for the executable
add_executable(cpp-workshop-ioannina 
    Company/HR_department.cpp
    Company/Company.cpp
    Observer_Pattern/Observer.cpp
    Observer_Pattern/Subject.cpp
    Observers/CompanyObserver.cpp
    Observers/Engineer.cpp 
    Observers/Recruiter.cpp
    main.cpp
)

# Include directories for header files
target_include_directories(cpp-workshop-ioannina
    PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}  # This includes all headers in the current folder
)

