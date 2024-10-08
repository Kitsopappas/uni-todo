#include <iostream>
#include "Company.h"
#include "CompanyObserver.h"

CompanyObserver::CompanyObserver(std::string name): Observer(name)  {}
CompanyObserver::~CompanyObserver() { std::cout << "CompanyObserver deleted" << std::endl; }

void CompanyObserver::SubscribeForJobPositions(Company& company)
{
    company.Subscribe(shared_from_this());
}

void CompanyObserver::UnsubscribeForJobPositions(Company& company)
{
    company.Unsubscribe(shared_from_this());
}

void CompanyObserver::Update()
{
    std::cout << "CompanyObserver " << GetName() << " got notification" << std::endl;
}