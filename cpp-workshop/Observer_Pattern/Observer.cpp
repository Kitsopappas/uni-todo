#include "Observer.h"

#include <iostream>

Observer::Observer(std::string name)
	: m_name(name)
{
}

Observer::~Observer()
{
	std::cout << GetName() << " deleted" << std::endl;
}

void Observer::Update()
{
	std::cout << "Observer " << GetName() << " got notification" << std::endl;
}

std::string Observer::GetName()
{
	return m_name;
}