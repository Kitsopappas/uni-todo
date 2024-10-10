#include "Subject.h"

#include "IObserver.h"
#include <iostream>

Subject::~Subject()
{
	std::cout << "Subject deleted" << std::endl;
}

void Subject::Subscribe(const std::shared_ptr<IObserver>& observer)
{
	m_observerList.push_back(observer);
}

void Subject::Unsubscribe(const std::shared_ptr<IObserver>& observer)
{
	for (auto it = m_observerList.begin(); it != m_observerList.end(); ++it)
	{
		if (auto sharedPtr = it->lock())
		{
			if (sharedPtr == observer)
			{
				m_observerList.erase(it);
				std::cout << "Observer deleted" << std::endl;
				return;
			}
		}
	}
	std::cout << "Observer not found" << std::endl;
}

void Subject::NotifySubscribes()
{
	std::cout << "Observers notified: " << std::endl;
	for (auto it = m_observerList.begin(); it != m_observerList.end();)
	{
		if (auto sharedPtr = it->lock())
		{
			sharedPtr->Update();
			++it;
		}
		else
		{
			std::cout << "Expired candidate removed" << std::endl;
			it = m_observerList.erase(it);
		}
	}

	std::cout << std::endl;
}